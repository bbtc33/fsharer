const express = require('express')
const multer = require('multer')
const cors = require('cors')
const knex = require('knex')
const fs = require('fs')
const cron = require('node-cron')

const postgres = knex({
	client: 'pg',
	connection: {
		host : process.env.DB_HOST,
		user : process.env.DB_USER,
		password : process.env.DB_PASS,
		database : process.env.DB_NAME,
	}
})

let response;

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, process.env.STORAGE_LOC)
	},
	filename: async function (req, file, cb) {
		day = Math.floor(Date.now() / 86400000)
		extensionarray = file.originalname.split(".")
		extension = extensionarray[extensionarray.length - 1]
		do {
			random_int = Math.floor(Math.random() * Math.pow(36, process.env.NAME_LENGTH))
			b36_int = random_int.toString(36)
			response = b36_int + '.' + extension
			match = await postgres('files').where('filename',response)

		} while(match.length != 0)
		postgres('files').insert({
			filename: response,
			date: day,
		}).then()
		cb(null, response)
	}
})



const upload = multer({
	storage: storage,
	limits:{fileSize:536870912 } // 500 mb
})
const app = express();

app.use(cors());
app.use(express.static(process.env.STORAGE_LOC));

// deletion schedule
cron.schedule('0 0 * * *',() => {

	const currentDate = Math.floor(Date.now() / 86400000);

	postgres('files')
		.select('filename')
		.from('files')
		.where('date', '<', currentDate)
		.then(
			fs.unlink('./storage/' + entry.filename, () => {})
		)
	postgres('files')
		.delete()
		.where('date', '<', currentDate)
		.then()


})


app.get('/', (req, res) => {
	res.send("API is up and running")
})

app.post('/uploadtext', upload.none(), async (req, res, next) => {
	day = Math.floor(Date.now() / 86400000)
	do {
		random_int = Math.floor(Math.random() * Math.pow(36, process.env.NAME_LENGTH))
		b36_int = random_int.toString(36)
		response = b36_int + '.txt'
		match = await postgres('files').where('filename',response)
	} while(match.length != 0)
	postgres('files').insert({
		filename: response,
		date: day,
	})

	fs.appendFile( process.env.STORAGE_LOC + "/" + response, req.body.chosenFile, () => {})
	const resObject = {link: response}

	res.json(resObject)
})
app.post('/upload', upload.single('chosenFile'), (req, res, next) => {
	/*const filename = function (req, file, cb) {
		const time = Date.now() % 86400000
		const day = Math.floor(Date.now() / 86400000)
		const b36time = time.toString(36)
		response = b36time + '.txt'
		postgres('files').insert({
			filename: response,
			timemillis: time,
			date: day,
		}).then()
		return response
	}*/

	const resObject = {link: response}

	res.json(resObject)
})

app.listen(process.env.PORT);
