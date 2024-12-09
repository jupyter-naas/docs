---
sidebar_position: 1
---

# FAQ

## What is Naas?
Naas, standing for "Notebook as a Service," is an open-source data product development platform project managed by NaasAI Inc. It empowers users to use Jupyter notebooks templates to create data & AI products. 

Naas is made of 5 layers: 
- Templates: a catalog of notebook templates to be used as building blocks to create data & AI products
- Drivers: a Python low-code function library to simplify the connection and interactions to third-party tools
- Jobs: a Python low-code function library to simplifiy all the devops related tasks when it comes to build data & AI products
- Data Product Framework: a procedure to ship data products to production 
- Workspace: a webapp to search for templates and distribute data & AI products in a ChatGPT-like interface, made for business use.

## What sets Jupyter apart from Naas?
[Jupyter](https://jupyter.org/) is the open-source project that serves as the foundation for Naas. Naas enhances the Jupyter experience by allowing users to use and share Jupyter notebooks without needing to download, install, or run anything. Naas adds micro-services to Jupyter notebooks/Lab instances, such as:

- Scheduling
- Asset sharing
- Webhooks
- Notifications
- Secret keys

Naas also simplifies Python scripting with low-code drivers through a Python library called [Naas drivers](https://pypi.org/project/naas-drivers/), available on Pypi.org. For those with little or no Python knowledge, Naas provides a starting point for data projects with templates from the [Naas awesome-notebooks](https://github.com/jupyter-naas/awesome-notebooks) library, which is fully open-source and accessible on Github.

## Is Naas free to use?
Yes, Naas offers a Free Plan that provides all users with 100 credits per month.

## How does the credit system work?
Naas resources are not unlimited. To provide free resources for product trials or hobbyist use, Naas offers credit plans for computing power requirements that exceed 100 credits per month.

## How can I use my credits?
Naas provides access to jobs divided into 6 categories:

- **LLM chats**: Number of tokens sent to a language model inside the Naas Chat
- **Notebook uptime**: Time spent on "open" Notebooks (notebooks connected to a kernel)
- **Scheduler runtime**: Time a scheduler spends to run your notebook when you are not around
- **Asset sharing**: When you expose an asset to the public, a credit is debited every time someone accesses it
- **Webhook/API calls**: When you connect a webhook to a third-party service that will then update your Naas notebooks
- **Notifications**: Number of messages sent per recipient

## Will my Naas Jobs be interrupted with the Free plan?
Yes, under the Naas Free plan, your Naas scheduler and other jobs will be halted every 72 hours. This means you'll need to reset them or consider upgrading to the Naas Professional plan for uninterrupted service.

## How can I check my credit balance?
You can access this information in your Naas Account section.

## What happens when I run out of credits?
We will notify you when you reach 80% of your credit limit. Once you exhaust your credits, your actions will be saved but frozen. To resume them, you will need to acquire more credits.

## How can I get more credits?
For assistance, feel free to contact us:
- Email: [support@naas.ai](mailto:support@naas.ai)
- Call: +33 6 85 25 69 97

## What browsers are supported?
Naas is compatible with most major browsers and is thoroughly tested with the latest versions of Chrome, Firefox, and Safari.

## Does Naas support other programming languages?
Naas primarily supports Python and its ecosystem of third-party tools. We're aware of the interest in support for other Jupyter kernels (e.g., R or Scala) and aim to accommodate these in the future. Please email us at [support@naas.ai](mailto:support@naas.ai) if you have such requirements.

## Can you help us setup our own project?
Yes. We can tackle your data project together. To discuss it, please contact us jeremy@naas.ai form and we will come back to you.

## Can Naas be used in a company?
Absolutely! Naas can become your best ally to scale your data & AI operations and maintain costs at an acceptable level. This is why we created this tool. Be sure that Naas will support initiatives or launch of any ambitious data-driven strategy, simply [Book a meeting](https://calendly.com/jeremyravenel) and let's talk.

## How do I install the Chrome Extension?
The Naas Chrome Extension transforms your browsing experience by integrating Naas directly into your Chrome browser. Here's how to install it:

1. Visit the [Chrome Web Store](https://chromewebstore.google.com/detail/naasai/cpkgfedlkfiknjpkmhcglmjiefnechpp)
2. Click "Add to Chrome" next to the Naas Chrome Extension
3. Confirm the installation by selecting "Add Extension"
4. The Naas icon will appear in your browser's extension area
5. Click the icon to activate and split your screen with Naas on the right

Key features include:
- Screen splitting for multitasking
- Seamless LinkedIn integration with automatic cookie management
- Support for multiple accounts through Chrome profiles

## How do I get my LinkedIn cookies manually?
1. Navigate to your [LinkedIn profile](https://www.linkedin.com/in/)
2. Right-click and select "Inspect" to open developer tools
3. Click the "Application" tab, then navigate to "Cookies"
4. Look for cookies named "li_at" and "JSESSIONID"
5. Input these cookies into Naas to enable LinkedIn integration
