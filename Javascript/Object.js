function Book(title,author,pages,read){
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
    this.info = function(){
        console.log(`${this.title} \n ${this.author} \n ${this.pages} \n ${this.read} \n `);
    }
}

const book1 = new Book("Hobbit","JRR Tolkien","295","has");
book1.info();