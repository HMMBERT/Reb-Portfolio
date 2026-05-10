// src/blogData.js

export const allBlogPosts = [
  { 
    id: 1, 
    slug: 'understanding-react-hook-flow',
    title: 'Understanding the React Hook Flow', 
    excerpt: 'A deep dive into how useState and useEffect work together in the component lifecycle.', 
    image: '/src/assets/blog/1.svg', 
    author: 'REB',                            
    date: 'September 25, 2025',                
    category: 'Web Development',               
    fullContent: `Hooks like useState and useEffect are fundamental to modern React, allowing functional components to manage state and side effects gracefully. Understanding their execution order is key to avoiding common bugs and writing efficient, predictable code. At its core, useState provides a way to declare state variables, receiving an initial value and returning the current state and a function to update it.

When you call the state update function, React schedules a re-render of your component. It's crucial to remember that these updates are asynchronous; React may batch multiple state updates together for performance. This is why using the functional update form, like setCount(prevCount => prevCount + 1), is best practice when the new state depends on the previous one, as it guarantees you're working with the most up-to-date state value.

The useEffect hook, on the other hand, handles side effects like API calls, subscriptions, or direct DOM manipulations. Its behavior is controlled by its dependency array. An empty array [] means the effect runs only once after the initial render, mimicking componentDidMount. If the array is omitted, the effect runs after every render. When the array contains state or prop values, the effect will re-run only when those specific values change, allowing for precise control over when your side effects are triggered.`
  },
  { 
    id: 2, 
    slug: 'css-grid-vs-flexbox',
    title: 'CSS Grid vs. Flexbox: Which to Choose?', 
    excerpt: 'Comparing two powerful CSS layout modules and when to use each for optimal results.', 
    image: '/src/assets/blog/2.svg',
    author: 'REB',
    date: 'September 18, 2025',
    category: 'CSS',
    fullContent: `When building layouts, developers often face a choice: CSS Grid or Flexbox? While both are powerful, they serve different primary purposes. Flexbox is designed for one-dimensional layouts—either a row or a column. This makes it perfect for aligning items along a single axis, such as distributing links in a navigation bar or centering a button within its container.

Flexbox operates on the concept of a main axis and a cross axis. Properties like justify-content control alignment along the main axis, while align-items controls alignment on the cross axis. By changing the flex-direction from row to column, you can switch these axes, giving you powerful control over linear arrangements. It excels at distributing space among items, which was a notoriously difficult task before its introduction.

CSS Grid, conversely, is built for two-dimensional layouts, allowing you to control both rows and columns simultaneously. This is where it truly shines, enabling the creation of complex page structures that were once only possible with fragile table-based layouts or floats. With Grid, you can define explicit tracks, create gaps between elements, and place items precisely within the grid structure, making it the ideal tool for the overall layout of a webpage or a complex component like a dashboard.`
  },
  { 
    id: 3, 
    slug: 'defending-against-sql-injection',
    title: 'Defending Against SQL Injection in 2025', 
    excerpt: 'A practical guide for developers on preventing one of the most common and dangerous web vulnerabilities.', 
    image: '/src/assets/blog/4.svg',
    author: 'REB',
    date: 'September 10, 2025',
    category: 'Cyber Security',
    fullContent: `SQL Injection remains a top threat to web applications, consistently ranking high on the OWASP Top 10. This attack occurs when a malicious actor can interfere with the queries that an application makes to its database, often by inserting malicious SQL code into a user input field. A successful attack can result in unauthorized access to sensitive data, data corruption, or even full control over the database server.

The single most effective defense against SQL Injection is the use of prepared statements, also known as parameterized queries. This technique separates the SQL query's structure from the data. The application first sends the query template to the database, which parses and compiles it. Then, the user-supplied data is sent separately as parameters. Because the database treats this data as literal values and not as executable code, any malicious commands within the input are never executed, neutralizing the attack.

While prepared statements are the primary defense, a multi-layered security approach is always best. Using an Object-Relational Mapper (ORM) can add another layer of abstraction that often handles parameterization automatically. Additionally, enforcing the Principle of Least Privilege—where the application's database user has only the minimum permissions necessary to function—can significantly limit the damage an attacker can do if a vulnerability is ever exploited. Combining these server-side defenses with client-side input validation creates a formidable barrier against SQLi.`
  },
  { 
    id: 4, 
    slug: 'rest-api-design-best-practices',
    title: 'REST API Design Best Practices', 
    excerpt: 'How to design clean, scalable, and easy-to-use RESTful APIs for your system.', 
    image: '/src/assets/blog/5.svg',
    author: 'REB',
    date: 'September 2, 2025',
    category: 'System Development',
    fullContent: `A well-designed API is a pleasure to use; a poorly designed one is a source of constant frustration. When building RESTful services, adhering to a set of best practices is crucial for creating an interface that is intuitive, predictable, and maintainable. This includes proper use of HTTP verbs (GET, POST, PUT, DELETE), consistent naming conventions for endpoints, and clear versioning strategies.

One of the core principles of REST is the focus on resources. API endpoints should be named after the resources they expose, using nouns instead of verbs. For example, to fetch a list of users, the endpoint should be /users, not /getUsers. HTTP verbs are then used to specify the action being performed on that resource: GET /users retrieves the list, POST /users creates a new user, and GET /users/123 retrieves a specific user. Using plural nouns for collections is a standard convention that keeps your API predictable.

Beyond naming and verbs, effective use of HTTP status codes is essential for clear communication between the client and server. While everyone knows 200 OK, a robust API will also use codes like 201 Created after a successful POST, 204 No Content for a successful DELETE, and a range of 4xx codes for client-side errors (e.g., 400 Bad Request, 401 Unauthorized, 404 Not Found). Proper status codes allow API consumers to build reliable error-handling logic, making your API a more dependable building block for other applications.`
  },
  { 
    id: 5, 
    slug: 'tech-growth-philippines',
    title: 'Scaling a Tech Business in the Philippines', 
    excerpt: 'Exploring the unique challenges and opportunities of growing a tech-focused business in the local landscape.', 
    image: '/src/assets/blog/6.svg',
    author: 'REB',
    date: 'August 28, 2025',
    category: 'Business',
    fullContent: `The tech scene in the Philippines is vibrant and growing at an unprecedented rate. However, local entrepreneurs face a unique set of challenges and opportunities, from navigating regulations to competing for talent in a globalized market. The key to success lies in understanding this distinct landscape and building a business that is both resilient and adaptable to the local context.

One of the greatest assets of the Philippine tech ecosystem is its people. The local talent pool is known for strong English proficiency, creativity, and remarkable adaptability. The primary challenge, however, is talent retention in the face of lucrative remote offers from international companies. To combat this, successful local businesses are investing heavily in building a world-class company culture, offering competitive benefits beyond just salary, and creating clear pathways for continuous learning and career growth.

Beyond talent, the market opportunity within the Philippines is immense. With a large, young, and increasingly digital-native population, the demand for localized digital services in fintech, e-commerce, logistics, and education is soaring. Businesses that can effectively solve specific problems for Filipino consumers and enterprises are well-positioned for explosive growth. Success requires not just technical excellence, but a deep understanding of the local culture, consumer behavior, and logistical realities.`
  },
];