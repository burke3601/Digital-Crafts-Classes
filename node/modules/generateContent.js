let generateContent = ({page, navigation, heading, additional,count})=>{
    return  `
        <!DOCTYPE html>
        <html>
            <head>
                <title>My Selection:${page}</title>
                
                <link rel="stylesheet" href="styles.css" type="text/css"/>
            </head>
            <body>
                ${navigation}
                ${heading}
                The count is ${count || 0}. I hope you are happy.
                <ul>
                    ${additional.join("")}
                </ul>
                <footer>
                    copyleft 2020
                </footer>
            </body>
        </html>
    `
}

module.exports =generateContent