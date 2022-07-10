export default (all_banners = banner_list, action: string): object => {

    switch (action) {

        case 'GET_BANNERS':
            return all_banners
            break;
        default:
            return all_banners;

    }

    

}

const banner_list = [

    {

        title: "Gracie Sierra Jiu Jitsu",
        tagline: "Elite Training for BJJ, Judo, Boxing, and Muay Thai",
        image_link: `url("/banner/mats.jpg")`,
        buttonAmount: 2,
        buttonOne: "Adults",
        buttonTwo: "Kids"


    },
    {

        title: "Elite Grapping Training",
        tagline: "Confidence and Skill Building for Beginner and Advanced",
        image_link: `url("/banner/class.jpg")`,
        buttonAmount: 1,
        buttonOne: "See Classes",
        buttonTwo: ""


    }


]