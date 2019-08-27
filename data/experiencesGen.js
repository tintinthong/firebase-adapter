// I used this input for https://www.json-generator.com/
// data is in experiences.json

[
  '{{repeat(15, 20)}}',
  {
    index: '{{index()}}',
    id: '{{objectId()}}',
    date: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    name: '{{company()}} {{company()}}',
    price: '{{floating(1000, 4000, 2, "$0,0.00")}}',
    description:'{{lorem(1,"paragraphs")}}',
    numOfPax:'{{integer(1,5)}}',
    hostName:'{{firstName()}} {{surname()}}',
    hostID:'{{objectId()}}',
    hostDescription:'{{lorem(1, "paragraphs")}}',
     reviews:[
      '{{repeat(integer(1,5))}}',
      {
        userName: '{{firstName()}} {{surname()}}',
        userID: '{{objectId()}}',
        userImgUrl: 'http://placehold.it/{{objectId()}}'
      
      }
    ],
    itenary:'{{lorem(1,"paragraphs")}}', 
    includes:'{{lorem(1,"sentences")}}', 
    type:'{{random("outdoor","indoor")}}',
    location:{
      address:'{{integer(100, 999)}} {{street()}}',
      city:'{{city()}}',
      state: '{{state()}}',
      postcode: '{{integer(100, 10000)}}'    
    },
    language:'{{random("english","arabic","french","spanish","chinese")}}', 
    duration:'{{integer()}}',
    tags: [
      '{{random("food","sports","art","social","theatre","class","business")}}'
      
    ] 
   
  }
]



