
*  Project Name:  DevStack 
** Project Description : DevStack is a responsive web application that helps developers explore different technologies and create their own personalized technolgy stack.Users can  view technology details ,add technologies to their stack , remove individual technologies  or remove all selected technologies.

## Technologies Used :
 
 * React.js 
 * TypeScript 
 * Tailwind CSS
 * DaisyUI 
 * React Icons
 * React Toastify
  
  ## Key Features: 

  * Technology Explorer: Users can browse different technologies with their name, category, description, difficulty level, rating, badge, and icon.

  ** Personalized Tech Stack: Users can add technologies to their personal stack. Added technologies are visually highlighted, and the "Add to Stack" button becomes disabled to prevent duplicate selections.

  ** Stack Management:Users can remove individual technologies or use the Remove All button to clear their entire stack. The UI automatically updates when technologies are added or removed. 
 
  


  1.What is Jsx, and why is it used in React 

  ** Jsx: JavaScript XML is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime. 

  ** It used in React :  Jsx makes it easier to create and understand ui components because we can write the structure of the ui close to the javaScript logic.


  2. What is the difference between props and state

  ** Difference between props and state  :

  *** Props: 
    i. Passed from a parent component .

    ii. Immutable (read-only for the child).

    iii. Used to configure or pass data to child  component.
    
    iv.  Changing props in the parent tiggers a re-render in the child. 


    *** State: 

    i. Managed inside the component itself .

    ii. Mutable (can be  updated via hooks/methods).

    iii. Used to handle changing data and user action .

    iv. changing state tiggers re-render of that component.


    3. What does the useState  hook do and where did you use it in this project?


    ** The useState hook is used to store and manage state in a React functional component . In my DevStack project , i used useState to store the technologies selected by the user and update the stack when  a technology is added or removed . I also used it to track  whether a technology has already been added,so I could change and disable the button. 

    4.what does the useEffect hook do, and why did you need it to load the JSON data?

    ** useEfect is a React hook used to perform side effects in a component , such  as fetching data from an API or JSON file, setting timers, updating the document file, or working with external system.


    ** In my project , I used it to fetch the technology data from the JSON file after the component rerendered and then stored that data in state so I could display the technologies dynamically. 


    5. Why does every item in a .map() list need a unique key prop?
 
   ** Every item in a map() list needs a unique key prop so React can uniuely identify each item and efficiently track changes such as adding, removing, or updating items . It helps React updated the UI efficiently. 


   6. What is conditional rendering? Show one palce you used it (example:the empty stack message). 

    ** Conditional rendering: Conditional rendering means displaying different UI elements based on a condition . 

    In my DevStack project , I used conditional rendering in the Your Stack section.If no technology is selected, I display "No technologies selected yet " .Otherwise , I use map() to display the selected technology cards. 

    7. How do you pass data from a parent component to a child component to a child component , and  how does a child send something back to the parent? 

    **  n React, a parent passes data to a child component through props. If a child needs to send information back to the parent, the parent passes a callback function as a prop. The child calls that function with the required data, and the parent can then update its state.