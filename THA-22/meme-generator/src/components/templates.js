const Templates =({templates, setMeme}) =>
{
    return(
        <div className="templates" >
           {  templates.map((template) => ( 
                <div  
                key={template.id} 
                className="template" 
                onClick= {() =>{ setMeme(template)
                }}
                >
                    <div style={{backgroundImage:`url(${template.url})`}} className="img"></div>
                    <h2>{template.name}</h2>
                    </div>
            )) 
            }
        </div>
    )
}

export default Templates;