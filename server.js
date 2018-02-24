var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var execSync = require('child_process').execSync;


var fs = require('fs')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));


var makeAPX = function(message) {
    var data = JSON.parse(message);
    var n = data.node,
        e = data.edge;
    var i = 0;

    var apxfile = "";

    for (i = 0; i < n.length; ++i) {
        apxfile += "arg(" + n[i] + ")." + "\n";
    }

    for (i = 0; i < e.length; ++i) {
        apxfile += "att(" + n[e[i][0]] + "," + n[e[i][1]] + ").\n";
    }

    fs.writeFileSync("a.apx", apxfile);
    return;

};



app.post('/api', function(req, res) {
    var message = req.body.n;
    if (message != '{"node":[],"edge":[]}') {
        makeAPX(message);
        var pr = execSync('./heureka/heureka -p EE-PR -f a.apx'),
            st = execSync('./heureka/heureka -p EE-ST -f a.apx'),
            co = execSync('./heureka/heureka -p EE-CO -f a.apx'),
            gr = execSync('./heureka/heureka -p EE-GR -f a.apx');

        var extensions = [pr.toString('utf8'), co.toString('utf8'), gr.toString('utf8'), st.toString('utf8')];
        res.send(JSON.stringify(extensions));

    }


});

/* serves all the static files */
app.get(/^(.+)$/, function(req, res) {
    // console.log('static file request : ' + req.params);
    res.sendFile(__dirname + req.params[0]);
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.listen(3000, function() {
    //console.log('Example app listening on port 3000!')
})
