---
title: 'Home page'
description: ''
_slug: '/'
order: 0
---

<block-home
title="Une démarche éco-conception web" img-src="eco-conception-web.jpg" cta-label="Découvrir notre démarche" cta-target="/"> L'éco-conception web consiste à diminuer l'impact écologique d'un service numérique. C'est une démarche qui doit être prise en compte dès le début du projet et durant toute la durée de vie du service web.
Aujourd'hui, le numérique représente 10% de la consommation mondiale d’électricité.
S’il était un pays, le numérique serait le 3e plus gros consommateur d’électricité !</block-home>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est autem etiam actio quaedam corporis, quae motus et status naturae congruentis tenet; Restinguet citius, si ardentem acceperit. Ille vero, si insipiens-quo certe, quoniam tyrannus -, numquam beatus; Quid de Platone aut de Democrito loquar? Duo Reges: constructio interrete. Expressa vero in iis aetatibus, quae iam confirmatae sunt. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Nunc haec primum fortasse audientis servire debemus. Si mala non sunt, iacet omnis ratio Peripateticorum.

![lol](20160816_095755_resized.jpg)

```js{1,3-5}[server.js]
const http = require('http');
const bodyParser = require('body-parser');

http
  .createServer((req, res) => {
    bodyParser.parse(req, (error, body) => {
      res.end(body);
    });
  })
  .listen(3000);
```
