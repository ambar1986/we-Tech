let data = {
	about: {text: "Once a a profile has been filled with all the neccesary information, our system will show you the matches for mentor/mentee based on the skillset the mentor posses and the skills the mentee wants to build on. 													The match will also be based on location/proximity and availability preferences specified when filling the profile.													After the match is made, you will be able to contact each other to set a time to meet and have the mentoring session"},
	elegible: {
		mentor: 'As a mentor: 									As a mentor you will be asked to fill in a profile that will ask for specific technologies ...etc...', 
		mentee: 'As a mentee:  									You should be a female 18 yo and older who is interested in learning to code, ideally females who are currently programming students...etc...'},
	home: {
		mission: 'WeTech hopes to bridge the gender and diversity gap in the tech community by offering a mentorship program for women in technology.'},
	contact: {
		address: 'New York, NY',
		phone: '1800',
		email:'@wetech.com'},
	users:{ 
		mentor:[{name:'Juan', skills:'JavaScript', description:'I love to code'},{name: 'Ambar', skills:'JavaScript', description: 'Coffee and code'}],
		mentee:[{name:"Vanessa", Skills:'JavaScript, HTML, CSS', description:'Looking for a mentor in JavaScript'},{name:'Salina', skills:'JavaScript', description:'Learning to code'}]}
}

data.getAbout = function() {
  return this.about;
};

data.getElegible = function(){
	return this.elegible;
};

data.getHome = function(){
	return this.home
}

data.getContact = function(){
	return this.contact
}

data.getUser = function(){
	return this.users
}

export default data;