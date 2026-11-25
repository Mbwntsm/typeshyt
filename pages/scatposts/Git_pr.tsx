import Paragraph from '../../src/components/Paragarph'
import Title from '../../src/components/Title';
import { ImagieCenter} from '../../src/components/Imagie';
import pic1 from "../zimages/gitpr/pic1.png"
import pic2 from "../zimages/gitpr/pic2.png"
import pic3 from "../zimages/gitpr/pic3.png"
import pic4 from "../zimages/gitpr/pic4.png"
import pic5 from "../zimages/gitpr/pic5.png"
import pic6 from "../zimages/gitpr/pic6.png"
import pic7 from "../zimages/gitpr/pic7.png"
import pic8 from "../zimages/gitpr/pic8.png"
import pic9 from "../zimages/gitpr/pic9.png"
import pic10 from "../zimages/gitpr/pic10.png"
import pic11 from "../zimages/gitpr/pic11.png"
import pic12 from "../zimages/gitpr/pic12.png"
import pic13 from "../zimages/gitpr/pic13.png"
import pic14 from "../zimages/gitpr/pic14.png"
import pic15 from "../zimages/gitpr/pic15.png"
import pic16 from "../zimages/gitpr/pic16.png"


function Git_pr() {
  return (
    <>

      {/*   */}
      <Title
        title='Welcome to Open source, git fork and pull request'   
        date='Novermber 25, 2026' />
      
      <Paragraph>
         So, you want to contribute to open-source projects, but you have absolutely no idea how to use Git to actually do it?

Don't worry. This post is going to cover the basic workflow of contributing to an open-source project using Git and GitHub.

And trust me, it's way easier than you think.

For this tutorial, I'd recommend having two GitHub accounts available so we can understand the entire process hands-on. One will act as the project owner's account, and the other will act as the contributor's account.

I'll be using my main account as the contributor and borrowing my friend's account to act as the repository owner.
      </Paragraph>
      


      <Paragraph>LEVEL 1: Making Your First Open-Source Contribution</Paragraph>
      <Paragraph>
        <p>Step 1: Create a Repository</p>
First, log in to your friend's GitHub account and create a new repository.

Let's call it git-contribution-demo.

Inside that repository, create a file named main.c and add some basic C code:
Commit the file.

Congratulations! You've just created a repository that someone else can contribute to
</Paragraph>

 <ImagieCenter src={pic1} alt={"git pull request"}/>
 <Paragraph>
  <p>Step 2: Fork the Repository
</p>
Now, switch to your main GitHub account.

Visit the repository you just created using your friend's account. You'll find a Fork button in the top-right corner.

Click it.

But wait, what exactly is forking?

Think of forking as creating your own personal copy of someone else's repository.

The original repository belongs to your friend, and you don't necessarily have permission to directly modify it.

So, GitHub allows you to create a separate copy under your own account.

That's called a fork.

Why do we need it?

Because you can freely make changes to your fork without affecting the original project. Once you're happy with your changes, you can ask the original repository owner to include them in their project.

Pretty cool, right?</Paragraph>
 <ImagieCenter src={pic2} alt={"git pull request"}/>
 <Paragraph>
  <p>Step 3: Clone the Repository and Make Changes</p>
  Now that you have your own fork, let's bring it to your local machine.

Create a folder wherever you want to work and open your terminal inside it.


</Paragraph>
<ImagieCenter src={pic3} alt={"git pull request"}/>
       <ImagieCenter src={pic4} alt={"git pull request"}/>
     <Paragraph>Now, let's make some changes.

For this tutorial, I'm going to do two things:

Create a new file called hello.c.
Modify the existing main.c fil</Paragraph>
       <ImagieCenter src={pic5} alt={"git pull request"}/>
       <Paragraph>Great! We've made our changes.

Now let's save these changes to Git.

First, check what's changed:</Paragraph>
<ImagieCenter src={pic6} alt={"git pull request"}/>
  <Paragraph>That's it! Your changes are now available in your own GitHub repository.

But hold on. We haven't contributed anything to the original repository yet.

That's where Pull Requests come in.
Go back to your fork on GitHub.

You'll usually see a button saying Contribute or Compare & pull request.

Click it and select Open pull request.

Now, what exactly is a Pull Request?

A Pull Request (PR) is basically a request you send to the original repository owner asking them to review and include your changes in their project.

In simple words:

"Hey! I've made some changes to your project. Can you check them out and merge them if everything looks good?"

GitHub will show you the differences between your fork and the original repository.

You can also add a title and description explaining what you've changed and why.

Once everything looks good, click Create pull request.

Boom! Your first Pull Request is created.</Paragraph>
<ImagieCenter src={pic7} alt={"git pull request"}/>
<ImagieCenter src={pic8} alt={"git pull request"}/>
<ImagieCenter src={pic9} alt={"git pull request"}/>
<ImagieCenter src={pic10} alt={"git pull request"}/>
<Paragraph>
 <p>Step 5: The Repository Owner Reviews Your PR</p>
Now let's switch back to your friend's account, which owns the original repository.

Your friend will see a notification about the new Pull Request.

Open the repository and navigate to the Pull requests section.

Here, the owner can:

Review the code changes.
Leave comments or suggest modifications.
Request changes if something isn't right.
Approve and merge the Pull Request.
If everything looks good, the owner can simply click Merge pull request and confirm the merge.

And that's it!

Your changes are now part of the original repository.

Congratulations! You've just completed the basic GitHub contribution workflow.

</Paragraph>
<ImagieCenter src={pic11} alt={"git pull request"}/>
       <ImagieCenter src={pic12} alt={"git pull request"}/>
       <ImagieCenter src={pic13} alt={"git pull request"}/>
       <ImagieCenter src={pic14} alt={"git pull request"}/>
       <ImagieCenter src={pic15} alt={"git pull request"}/>
      <Paragraph> But we're not done yet</Paragraph>

      <Paragraph><p>LEVEL 2: What If Your Fork Is Behind the Original Repository?</p>
      Okay, here's a situation you'll encounter quite often when contributing to open-source projects.

Imagine you forked a repository a few days ago.

Meanwhile, the original repository owner has made several new commits.

Now your fork is outdated.

The original repository has new changes, but your fork doesn't have them.

So, how do we synchronize our fork with the original repository?

Don't panic. We have something called an upstream remote.
      </Paragraph>
      <Paragraph>
        <p>Step 1: Add the Upstream Remote</p>
        Remember, when you cloned your fork, Git automatically added a remote called origin.

By default, origin points to your own fork.

But we also need a reference to the original repository.

That's where upstream comes in.

<p>origin = Your fork.</p>
<p>upstream = Original repositor</p>
      </Paragraph>
      <Paragraph>
        <p>Step 2: Fetch the Latest Changes</p>
        Now, let's fetch the latest changes from the original repository:<p>git fetch upstream</p>
This downloads the latest commits from the original repository without automatically merging them into your current branch.
      </Paragraph>
      <Paragraph><p>Step 3: Merge the Changes</p>
      </Paragraph>
       <ImagieCenter src={pic16} alt={"and its done"}/>
      <Paragraph>And boom!

Your fork is now synchronized with the original repository.

One important thing: If you're already working on a feature branch, don't blindly merge everything into your feature branch. Usually, update your local main first, then bring those changes into your feature branch using merge or rebase.</Paragraph>
 
     </>
  )
}

export default Git_pr;