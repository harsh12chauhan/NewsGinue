const calcu = (userDetail)=>{
    const {business,sports,entertainment,technology,health,science} = userDetail;

    var cat = "general";

    if(business > sports && business >entertainment && business > technology && business > health && business >science){
        console.log(business);
        cat = "business";
    }else if(sports > business && sports >entertainment && sports > technology && sports > health && sports >science){
        console.log(sports);
        cat = "sports";
    }else if(entertainment > business && entertainment >sports && entertainment > technology && entertainment > health && entertainment >science){
        console.log(entertainment);
        cat = "entertainment";
    }else if(technology > business && technology >sports && technology > entertainment && technology > health && technology >science){
        console.log(technology);  
        cat = "technology"
    }else if(health > business && health >sports && health > entertainment && health > technology && health >science){
        console.log(health); 
        cat = "health"
    }else if(science > business && science >sports && science > entertainment && science > technology && science >health){
        console.log(science); 
        cat = "science"
    }
    return cat;
}
module.exports = {calcu};