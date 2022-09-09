const httpServer = require('http');
const url = require(`url`);
const fs = require('fs');

const replaceTemplate = require('./replaceTemplate');

const tempCourse = fs.readFileSync(
    `${__dirname}/data.json`,
    'utf-8'
 );

const templateHTMLCourse = fs.readFileSync(
    `${__dirname}/templateCourse.html`,
    'utf-8'
 );

   // function replaceTemplate = (htmlStr, course) => {
//const replaceTemplate = (htmlStr, course)=>{ // fat arrow function or lambda
 //   let output = htmlStr.replace(/{%NAME%}/g, course.courseName);
 //   output = output.replace(/{%IMAGE%}/g, course.image);
 //   output = output.replace(/{%FROM%}/g, course.from);
 //   output = output.replace(/{%INSTRUCTOR%}/g, course.instructor);
 //   output = output.replace(/{%CREDITS%}/g, course.credits);
 //   output = output.replace(/{%DESCRIPTION%}/g, course.description);
 //   output = output.replace(/{%ID%}/g, course.id);
 //   return output;
//  }







 const dataObj = JSON.parse(tempCourse);

const server = httpServer.createServer( (req, res) => {
    const urlParameter = url.parse(req.url, true);
    console.log(JSON.stringify(urlParameter.query));
    console.log(JSON.stringify(urlParameter.pathname));

    if(urlParameter.query.id){

        if(urlParameter.pathname === '/' || urlParameter.pathname.toLowerCase() === '/courses') {
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
            const course = dataObj[Number(urlParameter.query.id)];
            const strCourseName = JSON.stringify(course);
            const courseHTML = replaceTemplate(templateHTMLCourse, course);
            //res.end(`We recieved our first request from the client at resource ${urlParameter.pathname.toLowerCase()} with query parameter ${urlParameter.query.id}
            //${JSON.stringify(course)}
            //`)
            res.end(courseHTML);
        }
       else{
             res.writeHead(404, {
                'Content-type': 'text/html'
                
             });
             res.end(`resource not found`) 
        
       }
    }
});

server.listen(8000, 'localhost', ()=> {
        console.log('Listening to requests on port 8000');
      });