# dog-training-app

## Things you should install ##

- node.js -> node is going to control all of our packages so you'll definitely need this (if you've done any sort of mobile devleopment or web development in the past, you will probably already have this. To check, run `node --version`. If your command line doesn't recognize the command "node", then you'll have to install. I'm using v14.17.5 so you may want to install that same version (can be useful for avoiding headaches with mismatching package versions).
    
    1. Go to https://nodejs.org/gl/blog/release/v14.17.5/
    2. Scroll down and pick the download that corresponds with your PC
        <img width="815" alt="Screen Shot 2022-09-12 at 7 58 36 PM" src="https://user-images.githubusercontent.com/62805062/189784391-13e92cd3-9b0c-4bab-aa88-c489e5e8abbf.png">


- expo cli -> we're using expo instead of react-native cli becuase it should speed up the development process a bit and make it easier to work as a team.
       
    `npm install -g expo-cli`

- amplify cli -> we're using AWS Amplify to store everything on the back-end so you'll need the amplify cli

    `npm install -g @aws-amplify/cli`

## Steps to get started: ##

1. Clone the repo

2. Create a new branch inserting your last name instead of my last name (fuller):

    `git checkout -b personal/fuller`

3. Navigate into the dog_training_app folder with the following command:

    `cd dog_training_app`
    
4. Install all of the necessary dependencies:

    `npm install`
    
5. You're ready to go! To test, run the app (if you don't have Expo Go installed on your phone, you might want it to easily test the app on your actual device):

    `expo start`
