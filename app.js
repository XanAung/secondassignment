const express = require('express');
const app = express();

app.get('', (req, res)=>{
    res.send(`<div><h1><span>About Me</span></h1><p>Hey! I'm <strong>Alex</strong>. Coding has changed my world. It's not just about apps. Learning to code gave me <i>problem-solving skills </i>and a way to communicate with others on a technical level. I can also develop websites and use my coding skills to get a better job. And I learned it all at <strong>National Cyper City</strong> where they build your self-esteem and keep you motivated. Join me in this rewarding journey. You'll have fun, get help, and learn along the way!</p><p>'Declare variables, not war'</p></div><div><h1><span>My Coding Schedule</span></h1><table><tr><th>Day</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th></tr><tr><td>8-8:30</td><td>Learn</td><td></td><td></td><td></td><td></td></tr><tr><td>9-10</td><td></td><td>Practice</td><td></td><td></td><td></td></tr><tr><td>1-1:30</td><td></td><td></td><td>Play</td><td></td><td></td></tr><tr><td>3:45-5</td><td></td><td></td><td></td><td>Code</td><td></td></tr><tr><td>6-6:15</td><td></td><td></td><td></td><td></td><td>Discuss</td></tr></table></div><div><h1><span>My Skills</span></h1><ul><li>HTML <br /><progress min="0" max="100" value="80"></progress></li><li>JavaScript <br /><progress min="0" max="100" value="50"></progress></li><li>Python <br /><progress min="0" max="100" value="30"></progress></li></ul></div><div><h1><span>Contact Me</span></h1><form><input name="name" placeholder="Name" type="text" required /><br/><input name="email" placeholder="Email" type="email" required /><br/><textarea name="message" placeholder="Message" required ></textarea><input type="submit" value="SEND" class="submit" /></form></div><div><h1><span>Follow Me</span></h1><div><a href="#">Github</a><br><a href="#">Facebook</a><br><a href="#">Twitter</a></div></div>`);
});

app.get('/about', (req, res)=> {
    res.send("<div><h1><span>About Me</span></h1><p>Hey! I'm <strong>Alex</strong>. Coding has changed my world. It's not just about apps. Learning to code gave me <i>problem-solving skills </i>and a way to communicate with others on a technical level. I can also develop websites and use my coding skills to get a better job. And I learned it all at <strong>National Cyper City</strong> where they build your self-esteem and keep you motivated. Join me in this rewarding journey. You'll have fun, get help, and learn along the way!</p><p>'Declare variables, not war'</p></div>");
});

app.get('/coding-schedule', (req, res)=> {
    res.send('<div><h1><span>My Coding Schedule</span></h1><table><tr><th>Day</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th></tr><tr><td>8-8:30</td><td>Learn</td><td></td><td></td><td></td><td></td></tr><tr><td>9-10</td><td></td><td>Practice</td><td></td><td></td><td></td></tr><tr><td>1-1:30</td><td></td><td></td><td>Play</td><td></td><td></td></tr><tr><td>3:45-5</td><td></td><td></td><td></td><td>Code</td><td></td></tr><tr><td>6-6:15</td><td></td><td></td><td></td><td></td><td>Discuss</td></tr></table></div>')
});

app.get('/skill', (req, res)=>{
    res.send('<div><h1><span>My Skills</span></h1><ul><li>HTML <br /><progress min="0" max="100" value="80"></progress></li><li>JavaScript <br /><progress min="0" max="100" value="50"></progress></li><li>Python <br /><progress min="0" max="100" value="30"></progress></li></ul></div>')
});

app.get('/contact', (req, res)=>{
    res.send('<div><h1><span>Contact Me</span></h1><form><input name="name" placeholder="Name" type="text" required /><br/><input name="email" placeholder="Email" type="email" required /><br/><textarea name="message" placeholder="Message" required ></textarea><input type="submit" value="SEND" class="submit" /></form></div>')
});

app.get('/follow-me', (req, res)=>{
    res.send('<div><h1><span>Follow Me</span></h1><div><a href="#">Github</a><br><a href="#">Facebook</a><br><a href="#">Twitter</a></div></div>')
});

app.listen(3000, ()=> {
    console.log('Express server is running...');
});
