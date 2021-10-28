# week5-mj

Team MJ
We built 🎮 The Guessing Game 🎮 using React with Github API.
We wanted to let users to present their Github followers and then guess followers' username on Github.👀


## Acceptance Criteria ✅✅✅✅

- [x] Accept some user input (e.g. a username)
- [x] Query an API (e.g. the Github API, or any other fun one)
- [x] Populate the UI with API data
- [x] Have some form of persistent state and interactivity,


## Stretch criteria 🙆‍♀️🙅‍♀️🙆🏾🙅🏾‍♂️

- [ ] Save your state to localstorage so you can leave the page and come back later
- [x] Make it look great


## User Stories 

- I want to get to know my followers I want to try to remember their username.
- I want to get my username and present profile on the page so I can make sure I'm looking at my followers.
- I would like to be able to search my followers and present them only when I get their name correct.
- I want to have some time limit so the game can be more interesting
- I also want to get some reward when I get my followers name correct.


## Planning - Miro

<img width="1277" alt="planning_project" src="https://user-images.githubusercontent.com/78619809/139054521-33e2446f-6c12-4cc1-8ba5-a91452c27c6f.png">


## Screenshots

### 👇When you visit the site 👇
<img width="1052" alt="Screenshot 2021-10-28 at 18 08 40" src="https://user-images.githubusercontent.com/78619809/139302816-d1931872-6a8a-44e8-bb8a-39f76cec2557.png">

### 👇When you guess your followers right👇
<img width="1047" alt="Screenshot 2021-10-28 at 18 10 11" src="https://user-images.githubusercontent.com/78619809/139302997-f4da3777-90f6-4214-bbb0-9a05c49d6866.png">


## Bugs🐛🐞

- We spent a long time to figure out when our components didn't return anything. It was because we used `{}` after `return` with React we should use `()` to `return`.
- When we depoloyed our app on Netlify, it didn't render our components properly. I could be we didn't have out package.josn on the top level or we had a nested directory. After relocating everything we were able to deploy out app 🥳
- When we used `reactEffect()` to update state, we put an empty array as a second argument or put some values inside of the array. It caused a lot of problemd (e.g exceeding API limit, state is not being updated). We now know when to use empty/non empty array or just leave it empty


### Co-authoring

Co-authored-by: Mohamed <76549147+Alisyad9@users.noreply.github.com>
Co-authored-by: jijip41 <78619809+jijip41@users.noreply.github.com>
