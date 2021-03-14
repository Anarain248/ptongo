import logo from '../arjun-logo.png';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const Faqs = () => {
    return (
        <>
        <img className="logo" src={logo}/>
        <div className="faqpage">


              <h1 className="title"><HelpOutlineIcon />Frequently Asked Questions<HelpOutlineIcon /></h1>
              <div className="q1">
              <h2>What is the point of PTonGo?</h2>
              <h4>PTonGo is an application that allows anyone to have access to various bodyweight workouts with diffrerent levels of difficulty. The purpose of this app is to make fitness fun and allow you to get in shape doing workouts that you can do anytime, anywhere. Along with that we have a foods list and recipes list to make nutrition simpler. It's an all in one fitness application.</h4>
              </div>
              <div className="q2">
              <h2>Are there only bodyweight workouts?</h2>
              <h4>Yes. This application only focuses on bodyweight workouts because we want users to be able to workout anytime, anywhere, onthego. That doesn't compromise the difficulty, these workouts get more difficult based on level and will challenge you.</h4>
              </div>
              <div className="q3">
              <h2>How many Levels are there for workouts?</h2>
              <h4>There are 10 total levels and each level gets more difficult as you go up.</h4>
              </div>
              <div className="q4">
              <h2>Can you start at any level?</h2>
              <h4>Yes, you can start at any level you feel comfortable. The reason for this is everyone will have varying levels of fitness experience and so we want to allow them the flexibility to start at a level they feel comfortable based on their experience.</h4>
              </div>
              <div className="q5">
              <h2>How do you know when to move to the next level?</h2>
              <h4>You should move up to the next level only when you can complete the workout within an hour for a total of 3 times for that week. There is a timer for each workout and you should time yourself to make sure you can complete the workout within 60 minutes.</h4>
              </div>
              <div className="q6">
              <h2>What is the purpose of the timer?</h2>
              <h4>The timer is there for you to time yourself during the workout so you know how long you take for each workout, when to move up to the next level when you complete the workout within 60 minutes, and a way to hold yourself accountable so that you're not resting too much during the workout.</h4>
              </div>
              <div className="q7">
              <h2>What are the food lists for?</h2>
              <h4>The food lists in the healthy foods section are divided into three categories which are the main macronutrients protein, carbohydrates, and fats. The purpose is to allow for easy tracking of various healthy foods since the food list give you the exact calories and macronutrient for each food.</h4>
              </div>
              <div className="q8">
              <h2>What if I can't complete the workout within an hour?</h2>
              <h4>If you can't complete a workout within an hour, simply stay on that level for the next workout until you get there. The timer allows you to see how far you are from the goal. It can take some time to move to the next level which is completely okay! As you see, the goal time always stays at 60 minutes but the difficulty of the workouts increases as you go up in levels. This is part of the challenge, take your time in going up in levels.</h4>
              </div>
              <div className="q9">
              <h2>Are these full body workouts only?</h2>
              <h4>Yes, these are full body workouts only and are meant to be performed about 3 times per week. So if you're on a level, make sure to complete that level successfully within an hour atleast 3 times for that week before moving onto the next level.</h4>
              </div>
              <div className="q10">
              <h2>How do I know which level to start at?</h2>
              <h4>The levels are grouped in three categories of Beginner, Intermediate, and Advanced. Pick the level based on your experience level.</h4>
              </div>
        </div>
        </>
     );
}

export default Faqs;
