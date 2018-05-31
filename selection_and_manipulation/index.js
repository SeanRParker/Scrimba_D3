// javascript
d3.select();
d3.selectAll();

// Returns the first <h1>, if there isn't one, it returns nothing
d3.select('h1').style('color', 'LightCoral')
  .attr('class','heading')
  .text('Updated h1 tag');

d3.select('body').append('p').text('First Paragraph');
d3.select('body').append('p').text('2nd Paragraph');
d3.select('body').append('p').text('Third Paragraph');

d3.selectAll('p').style('color','CadetBlue');