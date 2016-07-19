var React = require('react');
var blogScreen= require('file!./../../views/img/blog-screen.png');

var Portfolio = React.createClass({
  render: function(){
    return(
      <div className="portfolio">
        <h1> Look at this great thing I made!</h1>
        <br/>
        <h2>BLOGCEPTION!!!!</h2>
        <img className='portfolio-img' src={ blogScreen } />
        <p>Herderder serp derps derpsum sherp derperker derpy terpus. Der perp mer pee ler le herp herpderpsmer merp. Ner berps herpem sherp derperker pee. Der herpem, pee perp merp ter ner. Herpderpsmer perper serp, ler merp. Tee nerpy, herpy herpderpsmer sherpus. Nerpy derpsum derpler, herpsum herpderpsmer. Mer herpler herpderpsmer le tee ner herpsum. Herpem derps pee serp der? Ner ler le dee merp.</p>
        <br/>

      </div>
    )
  }
});

module.exports = Portfolio;
