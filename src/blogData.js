// src/blogData.js

export const allBlogPosts = [
  {
    id: 12,
    slug: 'lessons-from-qa-to-building-automation',
    title: 'What Being a QA Taught Me About Building Automation',
    excerpt: 'Why the discipline of finding bugs turned out to be the perfect foundation for building tools that prevent them.',
    image: '/blog/13.svg',
    author: 'REB',
    date: 'August 1, 2026',
    category: 'Career',
    fullContent: `Before I was building automation tools, I was a QA whose job was to manually find the mistakes that automation now prevents. That role turned out to be one of the best possible training grounds for becoming a developer, not because of the coding, but because of the mindset it instilled: a relentless attention to edge cases, and a habit of asking "what happens if this input is slightly wrong" before anything else.

Manually checking sales orders against item releases, verifying delivery addresses, and cross-referencing client profiles day after day gave me an intimate understanding of exactly where things go wrong in a real production workflow, not the theoretical failure modes you read about, but the actual, specific ways that data gets mismatched or mistyped in practice. When I eventually started automating those same checks, I wasn't guessing at what the tool needed to handle. I already knew, because I had personally caught those exact errors by hand for months.

That's the biggest lesson I'd pass on to anyone moving from QA into development: don't treat your QA experience as something to leave behind, treat it as domain expertise. The best automation isn't built by developers who are simply told what a process does, it's built by people who deeply understand where that process breaks. Being a QA first didn't slow down my transition into building software, it's the exact reason the tools I build actually work.`
  },
  {
    id: 11,
    slug: 'building-ntt-express-shipper-assigner',
    title: 'Building NTT EXPRESS: An Automatic Shipper Assignment System',
    excerpt: 'How a rule-based manual assignment process became a fast, automated logistics workflow.',
    image: '/blog/12.svg',
    author: 'REB',
    date: 'July 2026',
    category: 'Automation',
    fullContent: `Assigning shippers to outgoing orders is, on the surface, a simple rule-based decision: match an order to the right shipper based on a handful of criteria like location, capacity, and delivery timelines. In practice, doing this manually at volume means someone spending hours every day applying the same set of rules over and over, order after order, with almost no variation in the underlying logic.

That repetitiveness made shipper assignment a strong candidate for automation, and it became the foundation for NTT EXPRESS. The core of the system is straightforward: encode the assignment rules that the team was already using, and let the system apply them automatically as new orders come in. The harder part was handling the exceptions gracefully, the orders that didn't fit any of the standard rules, so the system needed a clear way to flag those for human review rather than silently assigning them incorrectly.

Since going live, the system has taken what used to be a manual, rule-based assignment process and turned it into a fast automated workflow, freeing the team from a task that consumed real time every day but required no creative decision-making. It's become one of my favorite examples of a broader theme in my work: the best automations aren't necessarily the most technically complex ones, they're the ones that quietly remove a task nobody enjoyed doing manually.`
  },
  {
    id: 10,
    slug: 'automating-7-eleven-partner-onboarding',
    title: 'Automating Partner Onboarding for 7-Eleven',
    excerpt: 'Turning a manual, form-heavy onboarding and profiling process into a repeatable automated workflow.',
    image: '/blog/11.svg',
    author: 'REB',
    date: 'June 2026',
    category: 'Automation',
    fullContent: `Onboarding new partners is one of those processes that looks simple on paper but hides a surprising amount of manual effort underneath: collecting documents, verifying details across multiple systems, re-entering the same information into different forms, and profiling each account before it's ready to go live. At NTT Data Payment Services, the 7-Eleven onboarding and profiling workflow had exactly this shape, a lot of steps, very little actual decision-making, and a high volume of accounts moving through it.

The first step in automating a process like this isn't writing code, it's mapping the process itself. I spent time understanding every manual touchpoint: which fields got cross-checked against which source, where human judgment was genuinely needed versus where it was just rote data entry, and where errors tended to creep in from fatigue or repetition. Only after that mapping was clear did it make sense to start building, because automating the wrong step, or automating a step that still needs a human eye, causes more problems than it solves.

The resulting tool handles the repetitive verification and profiling steps automatically, freeing up the team to focus on the parts of onboarding that genuinely need human attention, like resolving edge cases or handling exceptions. It's a good example of a broader principle I keep coming back to: automation isn't about replacing judgment, it's about removing the parts of a workflow that never needed judgment in the first place.`
  },
  {
    id: 9,
    slug: 'one-man-team-shipping-internal-tools',
    title: 'Shipping Internal Tools as a Team of One',
    excerpt: 'Reflections on building, testing, and turning over production software with no dedicated team behind you.',
    image: '/blog/10.svg',
    author: 'REB',
    date: 'May 20, 2026',
    category: 'Career',
    fullContent: `There's a particular kind of pressure that comes with being the only person building a tool that other people are going to depend on. There's no separate QA team to catch your mistakes, no dedicated ops team to help with deployment, and no one else to blame if something breaks in production. Every decision, from the architecture to the edge cases, sits entirely on your shoulders.

What I've learned from shipping several internal automation tools this way is that the constraint actually forces better habits. Without a safety net, you naturally write more defensive code, you test against real production data earlier, and you stay close to the people who will actually use the tool so you understand their workflow well enough to not break it. Turning over my first piece of software for company-wide use taught me that the technical build is often the easier half of the job; the harder half is making sure it fits seamlessly into how people already work.

Seeing a tool you built alone quietly running in the background, saving people time they didn't ask for but clearly needed, is a specific kind of satisfaction that's hard to describe. It's not the recognition that matters most, it's the breathing room it gives to the people who no longer have to do the repetitive part of their job by hand. That's the reward that keeps me looking for the next process worth automating.`
  },
  {
    id: 6,
    slug: 'automating-repetitive-qa-tasks',
    title: 'Automating Repetitive QA Tasks: From 100 Manual Checks to One Script',
    excerpt: 'How I turned a tedious daily verification process into a background automation tool at NTT Data Payment Services.',
    image: '/blog/7.svg',
    author: 'REB',
    date: 'May 2026',
    category: 'Automation',
    fullContent: `Repetitive, no-decision work is one of the clearest signals that a process is ready for automation. As a QA at NTT Data Payment Services, I was manually cross-checking sales orders against item releases, verifying descriptions and delivery addresses, and matching GCash profiles against client IDs. On a normal day this meant reviewing well over a hundred items by hand, a task that consumed hours but required almost no judgment calls once the checking rules were clear.

Recognizing a repetitive pattern is only half the job; the other half is designing a tool that fits into the existing workflow rather than disrupting it. Instead of asking the team to change how they worked, I built a script that ran quietly in the background, picked up the same data they were already looking at, and produced a report once the checks were done. That single design choice, matching the automation to the existing process instead of the other way around, was what made adoption painless and got the tool turned over for company-wide use.

The lesson that stuck with me is that the highest-leverage automations are rarely the flashiest ones. A background script that saves a team twenty seconds per terminal, or turns a hundred manual checks into zero, compounds into hours of reclaimed time every single day. Identifying these unglamorous but high-frequency tasks, and quietly fixing them, has become one of the most rewarding parts of how I build software.`
  },
  {
    id: 17,
    slug: 'looking-ahead-2026-automation-roadmap',
    title: 'Looking Ahead: What 2026 Holds for My Automation Projects',
    excerpt: 'A look at the process improvements and automation work planned for the year ahead at NTT Data Payment Services.',
    image: '/blog/17.svg',
    author: 'REB',
    date: 'December 5, 2025',
    category: 'Career',
    fullContent: `Every automation tool I've shipped so far has come from the same starting point: noticing a repetitive process, understanding it deeply enough to know where it can safely be handled by a machine, and building something that fits quietly into how people already work. Heading into 2026, that same approach is shaping the next round of projects at NTT Data Payment Services.

The tools I've built so far, the QA cross-checker, the GCash report automator, the 7-Eleven onboarding flow, and NTT EXPRESS's shipper assignment system, all solved a specific, narrow problem well. The next step is looking at where these individual automations can start talking to each other, so that a completed check in one system can trigger the next step somewhere else without a person needing to manually hand off the work in between.

There's also a broader lesson I want to carry forward: the best automation candidates are rarely the most technically interesting ones. They're the boring, high-frequency, low-judgment tasks that nobody enjoys doing but everybody has to do anyway. Finding more of those, and building tools that quietly remove them, is exactly the kind of work I'm looking forward to continuing into the new year.`
  },
  {
    id: 16,
    slug: 'lessons-from-building-my-portfolio',
    title: 'Lessons from Building My Developer Portfolio',
    excerpt: "What I learned about React, component structure, and presenting real work while building the site you're looking at right now.",
    image: '/blog/16.svg',
    author: 'REB',
    date: 'November 28, 2025',
    category: 'Web Development',
    fullContent: `Building a portfolio site sounds like it should be simple: a few sections, some project cards, a contact form. In practice, it's one of the more interesting front-end problems I've worked on, mainly because the "content" keeps changing. Projects get added, blog posts pile up, and the whole site needs to stay easy to update without turning into a mess of one-off components.

The approach that ended up working best was separating data from presentation completely. Project details and blog posts live in their own arrays, separate from the components that render them. That meant adding a new project or blog post was just a matter of appending an object to a list, not touching any JSX at all. It's a simple pattern, but it made the difference between a site I dread updating and one I actually keep current.

The other lesson was about restraint. It's tempting to add every animation, every transition, every visual flourish available in React. What actually made the site feel more professional was cutting most of that out and letting the actual project work speak for itself, clean typography, clear structure, and fast load times over decoration. A portfolio's job is to get out of the way of the work it's showcasing, not to compete with it.`
  },
  {
    id: 15,
    slug: 'automating-receipt-data-validation-csharp',
    title: 'Automating Receipt Data Validation in C#',
    excerpt: 'Building a WinForms tool to extract and verify MID and TID data from retail PDF receipts without manual review.',
    image: '/blog/15.svg',
    author: 'REB',
    date: 'November 21, 2025',
    category: 'Automation',
    fullContent: `Retail receipt validation is a task that sounds trivial until you're the one doing it by hand, hundreds of times over. Each PDF receipt contains a Merchant ID and Terminal ID that need to be checked against what the system expects, and any mismatch can point to a configuration error further up the chain. Manually opening each file and cross-referencing the values is slow, and it's exactly the kind of task where a tired reviewer starts missing small discrepancies.

I built a C# WinForms application to handle this instead. The core challenge wasn't the UI, it was reliably extracting structured data, MID, TID, and a few other fields, from PDFs that weren't always formatted consistently. Different receipt templates meant the extraction logic needed to be flexible enough to handle variation without silently producing wrong results, which meant building in validation checks at the extraction step itself, not just at the end.

Once the extraction was solid, the actual validation logic was straightforward: compare extracted values against the expected records and flag discrepancies clearly, rather than just accepting or rejecting a whole batch. What used to be a manual, error-prone review process became a tool that could process a stack of receipts in the time it used to take to check just a handful by hand, with a much lower chance of a bad match slipping through.`
  },
  {
    id: 14,
    slug: 'designing-secure-auth-jwt-nodejs',
    title: 'Designing a Secure Authentication System with JWT and Node.js',
    excerpt: 'Key decisions behind building a robust authentication backend, from password hashing to token management.',
    image: '/blog/14.svg',
    author: 'REB',
    date: 'November 14, 2025',
    category: 'Cyber Security',
    fullContent: `Authentication is one of those systems where getting the fundamentals right matters more than adding clever features. Building a secure auth backend with Node.js meant starting from a few non-negotiables: never store plaintext passwords, never trust a token without verifying it properly, and always assume an attacker will try the obvious attack first.

Password handling came down to using a strong hashing algorithm with a proper salt, so that even if the underlying database were ever exposed, the passwords themselves would remain computationally impractical to reverse. For session handling, JSON Web Tokens offered a clean way to keep the backend stateless, the server doesn't need to store session data, it just verifies a signed token on each request. The tradeoff is that a JWT can't easily be revoked before it expires, which shaped decisions around token lifetime and the use of shorter-lived access tokens paired with refresh tokens.

The parts that took the most care weren't the happy path, they were the failure cases: what happens when a token is expired, tampered with, or missing entirely, and making sure each of those cases fails safely and returns a clear, non-revealing error rather than leaking information about why authentication failed. A secure system isn't just one that works correctly when everything goes right, it's one that fails safely when something doesn't.`
  },
  {
    id: 13,
    slug: 'building-full-stack-ecommerce-local-business',
    title: 'Building a Full-Stack E-commerce Site for a Local Business',
    excerpt: "How Berto's Chili Garlic went from a local product to a branded online storefront, built with React and Node.js.",
    image: '/blog/20.svg',
    author: 'REB',
    date: 'November 7, 2025',
    category: 'Web Development',
    fullContent: `Building software for a local business is a different kind of challenge than building an internal automation tool. There's no existing workflow to fit into, instead, the goal is creating an entirely new digital presence for a product that previously only existed on physical shelves. That was the starting point for Berto's Chili Garlic, a local condiment brand that needed a proper online storefront and brand identity.

The technical stack, React on the front end with a Node.js backend, was chosen less for novelty and more for speed of iteration. A small business project like this benefits enormously from being able to make quick changes to the product catalog, adjust the landing page copy, or tweak the layout without a lengthy deployment process. Vite's fast build times made that iteration loop practically instant during development.

What mattered most, though, wasn't the framework choice, it was translating a physical product's identity into a digital one. The product catalog needed to feel like an extension of the actual packaging and branding, not a generic template with photos dropped in. Getting that right meant spending as much time on the visual presentation and product photography layout as on the underlying code, a good reminder that for small business projects, the front-end polish is often just as important as the back-end architecture.`
  },
  { 
    id: 1, 
    slug: 'understanding-react-hook-flow',
    title: 'Understanding the React Hook Flow', 
    excerpt: 'A deep dive into how useState and useEffect work together in the component lifecycle.', 
    image: '/blog/1.svg', 
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
    image: '/blog/2.svg',
    author: 'REB',
    date: 'September 18, 2025',
    category: 'CSS',
    fullContent: `When building layouts, developers often face a choice: CSS Grid or Flexbox? While both are powerful, they serve different primary purposes. Flexbox is designed for one-dimensional layouts—either a row or a column. This makes it perfect for aligning items along a single axis, such as distributing links in a navigation bar or centering a button within its container.

Flexbox operates on the concept of a main axis and a cross axis. Properties like justify-content control alignment along the main axis, while align-items controls alignment on the cross axis. By changing the flex-direction from row to column, you can switch these axes, giving you powerful control over linear arrangements. It excels at distributing space among items, which was a notoriously difficult task before its introduction.

CSS Grid, conversely, is built for two-dimensional layouts, allowing you to control both rows and columns simultaneously. This is where it truly shines, enabling the creation of complex page structures that were once only possible with fragile table-based layouts or floats. With Grid, you can define explicit tracks, create gaps between elements, and place items precisely within the grid structure, making it the ideal tool for the overall layout of a webpage or a complex component like a dashboard.`
  },
  {
    id: 8,
    slug: 'packet-capture-fundamentals-scapy',
    title: 'Packet Capture Fundamentals with Scapy',
    excerpt: 'An introduction to building real-time network monitoring tools using Python and Scapy on Kali Linux.',
    image: '/blog/9.svg',
    author: 'REB',
    date: 'September 15, 2025',
    category: 'Cyber Security',
    fullContent: `Understanding what is actually moving across a network is one of the most fundamental skills in security work, and Scapy remains one of the most approachable tools for learning it. Unlike higher-level monitoring dashboards, Scapy lets you construct, send, sniff, and dissect packets directly in Python, which makes the underlying protocols far less abstract.

A simple sniffing script starts with capturing raw traffic on an interface and filtering it down to something meaningful, whether that's isolating a specific protocol like DNS or HTTP, or watching for a particular source and destination pair. From there, the real value comes from parsing each packet's layers, since Scapy exposes protocol fields directly, so recognizing patterns like repeated SYN packets without completed handshakes, or unusual DNS query volumes, becomes a matter of straightforward Python logic rather than needing a separate specialized tool.

Building this kind of tool from scratch, rather than relying only on prebuilt software, forces a much deeper understanding of how traffic actually behaves at the packet level. That understanding transfers directly into better intuition when diagnosing network issues or spotting the early signs of suspicious activity, which is exactly why hands-on tools like this remain a staple of practical cybersecurity education.`
  },
  { 
    id: 3, 
    slug: 'defending-against-sql-injection',
    title: 'Defending Against SQL Injection in 2025', 
    excerpt: 'A practical guide for developers on preventing one of the most common and dangerous web vulnerabilities.', 
    image: '/blog/4.svg',
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
    image: '/blog/5.svg',
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
    image: '/blog/6.svg',
    author: 'REB',
    date: 'August 28, 2025',
    category: 'Business',
    fullContent: `The tech scene in the Philippines is vibrant and growing at an unprecedented rate. However, local entrepreneurs face a unique set of challenges and opportunities, from navigating regulations to competing for talent in a globalized market. The key to success lies in understanding this distinct landscape and building a business that is both resilient and adaptable to the local context.

One of the greatest assets of the Philippine tech ecosystem is its people. The local talent pool is known for strong English proficiency, creativity, and remarkable adaptability. The primary challenge, however, is talent retention in the face of lucrative remote offers from international companies. To combat this, successful local businesses are investing heavily in building a world-class company culture, offering competitive benefits beyond just salary, and creating clear pathways for continuous learning and career growth.

Beyond talent, the market opportunity within the Philippines is immense. With a large, young, and increasingly digital-native population, the demand for localized digital services in fintech, e-commerce, logistics, and education is soaring. Businesses that can effectively solve specific problems for Filipino consumers and enterprises are well-positioned for explosive growth. Success requires not just technical excellence, but a deep understanding of the local culture, consumer behavior, and logistical realities.`
  },
];