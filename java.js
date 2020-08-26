var name = prompt('Whats Is First Your Name Mate?')

while (!(isNaN(name)) || name =='' || name =='null' )
 name = prompt(`Please Write Your Name`)

document.write(`${name}`)
