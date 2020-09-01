---
title: 'Home page'
description: ''
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est autem etiam actio quaedam corporis, quae motus et status naturae congruentis tenet; Restinguet citius, si ardentem acceperit. Ille vero, si insipiens-quo certe, quoniam tyrannus -, numquam beatus; Quid de Platone aut de Democrito loquar? Duo Reges: constructio interrete. Expressa vero in iis aetatibus, quae iam confirmatae sunt. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Nunc haec primum fortasse audientis servire debemus. Si mala non sunt, iacet omnis ratio Peripateticorum.

```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```