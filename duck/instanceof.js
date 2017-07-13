console.log('instanceof获取对象是否是某个类的实例');
// 多态性。方法一样，实现的功能不一样
// duck, chicken,发出叫唤的指令，做出了相应的反应
// 多态性无法让人满意，让动物叫。汪汪？
var makeSound=function(animal){
   if(typeof animal.sound()==='function'){
       animal.sound();
   };
    // if(animal instanceof Duck){
    //     console.log('嘎嘎嘎');
    // }else if(animal instanceof Chicken){
    //     console.log('咯咯咯');
    // }else if(animal instanceof Dog){
    //     console.log('汪汪汪');
    // }
// 动物世界，这个函数将是一个噩梦
}
var Duck=function(){
    Duck.prototype.sound=function(){
        console.log('嘎嘎嘎');
    }
};
var Chicken=function(){
     Chicken.prototype.sound=function(){
        console.log('咯咯咯');
    }
};
var Dog=function(){
 Dog.prototype.sound=function(){
        console.log('汪汪汪');
    }
};
var duck=new Duck();
var chicken=new Chicken();
var wc=new Dog();
makeSound(wc);
makeSound(duck);
makeSound(chicken);