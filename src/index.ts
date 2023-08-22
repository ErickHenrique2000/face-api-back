import express, {Router} from "express";
import { getFaces, saveFaces, start } from "./faces";
import cors from "cors";

start()
const routes = Router();

const api = express();
api.use(cors());
api.use(express.json());

routes.get('/faces', (req, res) => {
    return res.send(getFaces())
})

routes.post('/save-face', (req, res) => {
    // console.log('?????????????????????????')
    console.log(req.body)
    saveFaces(req.body.face)
    res.send()
})

api.use(routes)

api.listen(3000, () => {
    console.log('started')
})