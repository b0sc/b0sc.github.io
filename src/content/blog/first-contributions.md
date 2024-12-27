---
title: "Making Your First GitHub Contribution"
pubDate: 2024-10-01
author: "Achyut Koirala"
# layout: ../../layouts/BlogLayout.astro
authImage: "/team/tenure-2025/achyut-president.jpeg"
coverImage: "/blogs_assets/first-contributions/clone.png"
slug: first-contributions
summary: "Making your first contribution to an open-source project can be intimidating. This guide will help you get started."
type: "Article"
---

## Important Files

For any popular open source project a `CONTRIBUTING.md` file is a path to get started with contributing to the project. It will give basic information about how to contribute as well open pull request with templates and such.

---

<br>

## First Contributions

This project aims to simplify and guide the way beginners make their first contribution. If you are looking to make your first contribution, follow the steps below.

<img align="right" width="300" src="/blogs_assets/first-contributions/fork.png" alt="fork this repository" />

#### If you don't have git on your machine, [install it](https://docs.github.com/en/get-started/quickstart/set-up-git).

<br>

## Fork a repository

Fork [this](https://github.com/first-contributions) repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

<br>

## Clone the repository

<img align="right" width="300" src="/blogs_assets/first-contributions/clone.png" alt="clone this repository" />

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```
git clone [url you just copied]
```

where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.

<img align="right" width="300" src="/blogs_assets/first-contributions/copy-clone.png" alt="copy URL to clipboard" />

For example:

```
git clone https://github.com/<your_name>/first-contributions.git
```

where `your_name` is your GitHub username. Here you're copying the contents of the first-contributions repository on GitHub to your computer.

<br>

## Create a branch

Change to the repository directory on your computer (if you are not already there):

```
cd first-contributions
```

Now create a branch using the `git checkout` command:

```
git checkout -b [your-new-branch-name]
```

For example:

```
git checkout -b add-my-name
```

<br>

## Make necessary changes and commit those changes

Now open `Contribute.json` file in a text editor, add your name to it. Don't add it at the beginning or end of the file. Put it anywhere in between. Now, save the file.

If you go to the project directory and execute the command `git status`, you'll see there are changes.

Add those changes to the branch you just created using the `git add` command:

```
git add Contribute.json
```

Now commit those changes using the `git commit` command:

```
git commit -m "contribution: Added [your-name] to Contributors list"
```

replacing `your-name` with your name.

<br>

## Push changes to GitHub

Push your changes using the command `git push`:

```
git push -u origin your-branch-name
```

replacing `your-branch-name` with the name of the branch you created earlier.

<details>
<summary> <strong>If you get any errors while pushing, click here:</strong> </summary>

- ### Authentication Error
     <pre>remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
  remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information.
  fatal: Authentication failed for 'https://github.com/<your-username>/first-contributions.git/'</pre>
  Go to [GitHub's tutorial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) on generating and configuring an SSH key to your account.

</details>

<br>

## Submit your changes for review

If you go to your repository on GitHub, you'll see a `Contribute` button. Click on that button.

<img style="float: right;" src="/blogs_assets/first-contributions/pr.png" alt="create a pull request" />

Now Open the pull request.

Some Repository will have a template for the pull request. If there is a template, fill it out as requested. If there is no template, its best to write a brief description of the changes you made.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="submit pull request" />

Soon I'll be merging all your changes into the main branch of this project. You will get a notification email once the changes have been merged.

<br>

## Where to go from here?

Congrats! You just completed the standard _fork -> clone -> edit -> pull request_ workflow that you'll often encounter as a contributor! You can now search for other simple issues on github and start contributing!
