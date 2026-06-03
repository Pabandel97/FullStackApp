const server = require("./server");
const { PORT, MONGO_URI } = require("./config");
const mongoose = require("mongoose");

mongoose.connect(MONGO_URI)
.then(() => {
    server.listen(PORT, () => {
        console.log(`Coding app Backend running on port ${PORT}`);
    });
})
.catch(err => {console.log(error)});
