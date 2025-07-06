This is an ui implementation of Wingsfly App, bootstraped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Folder Structure
```sh 
src
├── components
│   ├── AddModal.tsx
│   ├── Date.tsx
│   ├── ModalMenu.tsx
│   ├── TaskList.tsx
│   ├── TodaysQuoteCard.tsx
├── constants.ts
├── hooks
├── images
│   ├── brain-icon.png
│   ├── check.png
│   ├── creative.png
│   ├── exportImages.ts
│   ├── fitness.png
│   ├── goal.png
│   ├── greater-than.png
│   ├── logo.png
│   ├── meditation.png
│   ├── meeting.png
│   ├── repeat.png
│   ├── savings.png
│   └── shopping.png
├── screens
│   └── WingsFlyApp.tsx
├── services
└── utils
    ├── date.ts
    ├── dimensions.ts
    └── randomBgColor.ts

7 directories, 25 files


```
## Clone in your local repo
```sh
git clone https://github.com/executionBeast/wingsfly.git

```

## Setup and Run 
First, you will need to run Metro, the JavaScript build tool for React Native.
To start the Metro dev server, run the following command from the root of your React Native project:
```sh
# Using npm
npm start

```
## Build and Run App
```sh
# Using npm
npm run android

```

## Key Decisions 
1. Used Dimensions to make it responsive
2. added custom fields like type in task item and rendered images dynamically based on types no hardcoding
3. imported then exported Images from the same single file to reduce writing import statement for each and every image (a lot of import statements) 



## Screenshots 
1. ![Wingsfly Home Screen](https://drive.google.com/file/d/1qAtfLeJGNTeUVEEqcHOd2dIhQKGZwR8k/view?usp=drive_link) 
2. ![Wingsfly Home Screen](https://drive.google.com/file/d/1qB1cIzjO-AhDwTCFy8A4D1VWRCUAvAAE/view?usp=drive_link)
3. ![Home Screen Modal](https://drive.google.com/file/d/1qH4bmgfBa_JTM4klvSnij-i6uhYuXeli/view?usp=drive_link)

## Home Screen
Home Screen includes header, calendar date picker, todays quote with progress bar, then task list, and a floating add button at bottom
