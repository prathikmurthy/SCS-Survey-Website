export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return res.status(200).json(req.body)
            break;

        case 'POST':
            res.status(200).json(req.body)
            break;
    }
    // res.status(200).json({ name: 'John Doe' })
}