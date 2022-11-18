//CRUD create read update delete to the server
//for fetch bydegfault it will be "get" mean Read (r)
//https://637701965c4777651211e8fa.mockapi.io/user
let url='https://637701965c4777651211e8fa.mockapi.io/user'
function getData(){
    fetch (url).then((data)=>{return data.json()})
    .then((data1)=>{
        console.log(data1)
    })
}
getData()

//method:"post" means create (c)/
//server allways reads as string fromet so we converted key value pair to json object and strtingfy 
// in header section we are passing type of content 
function CreateData(){
    let data={
        name:'john',
        email:'johndoe@gamil.com'
    };
    fetch (url,{
        method:'post',
        body:JSON.stringify(data),
        headers:{
            "content-type":"application/json"
        }
    })
}
//CreateData()

//"put" is used to update the data inside the pre-existind data 
//and in fetch we used "+/"id(16)"" means where we need to update
function updataData(){
    let data={
        name:"Stacie",
        email:'staciesampiere@mail.com'
    }
    fetch(url+"/16",{
        method:'put',
        body:JSON.stringify(data),
        headers:{
            "content-type":'application/json'
        }
    })
}
//updataData()

//"delete" in method
function deleteData(){
    fetch(url+'/2',
    {
        method:'delete'
    })
}
//deleteData()


