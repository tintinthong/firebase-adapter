// I used this input for https://www.json-generator.com/
// data is in users.json
//- tags not random number without replacement
//- credential only can have one 
//- experienceHistory only have a set number which is 2
[
  '{{repeat(5, 7)}}',
  {
    

    index: '{{index()}}',
    id: '{{objectId()}}',
    phoneNumber: '+6 01{{integer(0,9)}}-{{integer(1,9),integer(1000000,9999999)}}',
    email: '{{email()}}',
    firstname:'{{firstName(gender())}}',
    lastname:'{{surname()}}',
    credentialLevel: '{{random("admin","user","host")}}',
    balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
    hostDescription: '{{lorem(1,"paragraphs")}}',
    hostAddress: {
      address:'{{integer(100, 999)}} {{street()}}',
      city:'{{city()}}',
      state:'{{state()}}',
      postcode:'{{integer(100, 10000)}}'
    },
    imageURL: 'http://placehold.it/{{objectId()}}',
    bookedExpHistory: [
      '{{repeat(1,5)}}',
      {
        experienceId: '{{objectId()}}',
        name:'{{company()}} {{company}}',
        date: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}'
      }
    ],
    bankAccName: '{{firstName(gender())}} {{surname()}}',
    bankAccNum: '{{integer(100,999)}}-{{integer(100,999)}}-{{1000,9999}}'





    
    
    
    
  }
]