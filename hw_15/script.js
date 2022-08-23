const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "AmalSmith",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "NoahSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "CharlieSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "EmilySmith",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "LeoSmith",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];

class User{
    constructor(obj){
		for (let item in obj) {
			this[item] = obj[item];
		}
	    }

    render(){
		let userInfo = [];
		userInfo.push(`<div class="user">
			<div class="user__info">
				<div class="user__info--data">
				<img src="images/users/${this.img}.png" alt="Jack Smith" height="50">
				<div class="user__naming"><p>Name: <b>${this.name}</b></p>
					<p>Age: <b>${this.age}</b></p></div></div>
			<div class="user__info--role student">
				<img src="images/roles/${this.role}.png" height="25">
				<p>${this.role}</p></div></div>
				<div class="user__courses">${this.renderCourses()}</div>
			</div>`)
		return userInfo	
	}

	renderCourses(){
	let newCourses = [];
		if(this.courses)this.courses.map(obj => newCourses
		.push(`<p class="user__courses--course student">${obj.title}
		<span class="${this.getScore(obj.mark)}">${this.getScore(obj.mark)}</span></p> 
		`));
		return newCourses.join('');
    }
	
	getScore(mark) {
        if (mark <= 20) {
            return gradation["20"]
        } else if (mark <= 55) {
            return gradation["55"]
        } else if (mark <= 85) {
            return gradation["85"]
        } else return gradation["100"]

    }
}

class Student extends User{
    constructor(obj){
        super(obj);
    }
}

class Lector extends User{
    constructor(obj){
        super(obj);
    }

	renderCourses(){
		let newCourses = [];
		if(this.courses)this.courses.map(obj => newCourses
			.push(`	
				<div class="user__courses--course lector">
					<p>Title: <b>${obj.title}</b></p>
					<p>Lector's score: <span class="${this.getScore(obj.score)}">${this.getScore(obj.score)}</span></p>
					<p>Average student's score: <span class="${this.getScore(obj.studentsScore)}">${this.getScore(obj.studentsScore)}</span></p>
				</div>`));
		
			return `<div class="user__courses admin--info">${newCourses.join('')}</div>`;
	}
}

class Admin extends User{
    constructor(obj){
        super(obj);
    }

	renderCourses(){
		let newCourses = [];
		if(this.courses)this.courses.map(obj => newCourses
			.push(`	
				<div class="user__courses--course admin">
					<p>Title: <b>${obj.title}</b></p>
					<p>Admin's score: <span class="${this.getScore(obj.score)}">${this.getScore(obj.score)}</span></p>
					<p>Lector: <b>${obj.lector}</b></p>
				</div>`));
		
			return `<div class="user__courses admin--info">${newCourses.join('')}</div>`;
	}
}

const usersType = {
	student: obj  => new Student(obj ),
	lector: obj  => new Lector(obj ),
	admin: obj  => new Admin(obj )
}

let allUserRender = users
	.map(item => {
		return usersType[item.role] ? usersType[item.role](item) : new User(item).render()})
	.map(obj  => obj .render())


document.write(`<div class="users">${allUserRender.join('')}</div>`);