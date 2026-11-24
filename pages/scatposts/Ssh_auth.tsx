import Paragraph from '../../src/components/Paragarph'
import Title from '../../src/components/Title';
import { ImagieCenter} from '../../src/components/Imagie';
import windows1 from "../zimages/window_ssh_key_gen.png"
import pic2 from  "../zimages/pic2.png"
import pic3 from  "../zimages/pic3.png"
import pic4 from  "../zimages/pic4.png"
import pic5 from  "../zimages/pic5.png"
import pic6 from  "../zimages/pic6.png"
import pic7 from  "../zimages/pic7.png"
import pic9 from  "../zimages/pic9.png"
import pic10 from "../zimages/pic10.png"
import pic11 from "../zimages/pic11.png"
import pic13 from "../zimages/pic13.png"
import pic14 from "../zimages/pic14.png"
import pic15 from "../zimages/pic15.png"
import pic16 from "../zimages/pic16.png"
import pic17 from "../zimages/pic17.png"
import pic18 from "../zimages/pic18.png"
import pic19 from "../zimages/pic19.png"
import pic20 from "../zimages/pic20.png"
import pic21 from "../zimages/pic21.png"
import pic22 from "../zimages/pic22.png"
import pic23 from "../zimages/pic23.png"

function Ssh_auth() {
  return (
    <>
      <Title
        title='Turns Out, SSH Authentication Isnt as Complicated as I Thought.'
        date='November 24, 2026'
      />

      <Paragraph>
        SSH (Secure Shell) is a cryptographic network protocol that allows two computers to communicate securely over an untrusted network. Think of it as a secure, encrypted tunnel between your local machine and a remote machine (usually a server).
        Instead of physically accessing a server, you can remotely interact with it through your terminal. for example
        </Paragraph>
        <h4 className='text-green-600'>ssh username@192.168.1.100</h4>
      
      <Paragraph>
        This basically tells your computer: "Hey, connect me to the machine at 192.168.1.100 and authenticate me as username."
        
        When you initiate an SSH connection, your SSH client first connects to the SSH server, typically over TCP port 22. Once the connection is established, both sides negotiate the cryptographic algorithms and generate shared encryption keys to secure their communication. Next, the client verifies the server's identity using its host key, ensuring that it is connecting to the correct server. After that, the server authenticates the user, usually through a password or an SSH key pair, to verify their identity and access permissions. Once authentication is successful, a secure, encrypted communication channel is established, allowing commands and responses to travel safely between the client and server.
         
</Paragraph>
<Paragraph>
Let's talk about SSH keys. This is where things get interesting. SSH uses a cryptographic key pair to authenticate users without necessarily relying on passwords. This key pair consists of two keys: a private key and a public key.

</Paragraph>


      
<Paragraph>
  Think of the private key as your personal identity credential. It stays on your local machine, and you should never share it with anyone. The public key, on the other hand, can be shared with remote servers you want to access. These two keys are mathematically related, but knowing the public key doesn't allow someone to reconstruct your private key.
</Paragraph>

<Paragraph>
Now, how does authentication actually happen? Let's say you want to connect to a remote Linux server. First, you generate an SSH key pair on your local machine. You then place your public key on the remote server. When you initiate an SSH connection, the server checks whether your public key is authorized for your account. Your SSH client then proves that you possess the corresponding private key by generating a cryptographic signature. The server verifies that signature using your public key. If everything checks out, you're authenticated!

</Paragraph>
 
 <Paragraph>and I really wanted to understand how SSH authentication actually works, so I decided to try it hands-on instead of just reading about it.

I'll be using two machines for this experiment: one running Windows and another running Ubuntu.

The plan is to generate an SSH key pair on Windows, take the public key and add it to Ubuntu's authorized_keys file, and then try connecting to Ubuntu remotely using SSH.</Paragraph>

<Paragraph> First make sure you have ssh active on both windows and ubuntu machine..  i be using ubuntu in virtual box </Paragraph>





<Paragraph>
The very first step is to create an .ssh directory in your root (home) directory and navigate into it.

Next, we'll generate an SSH key using the Ed25519 algorithm. We're choosing Ed25519 because it provides strong security, excellent performance, and shorter key lengths compared to older algorithms like RSA.

We'll also assign a custom name to our SSH key. In this case, we'll name it ubuntu_id_ed25519 and save it inside the .ssh directory we just created.

When prompted to enter a passphrase, we'll simply press Enter to skip it for now, and press Enter again to confirm.


<ImagieCenter src={windows1} alt={"windows_terminal_1"}/>
Move to our Ubuntu machine and create an .ssh directory in the root (home) directory, just as we did on Windows. Navigate into the newly created .ssh directory.

Next, we need to add the public key that we generated on our Windows machine. We'll do this to allow our Windows machine to authenticate with the Ubuntu server using SSH.

For this, we need to create a file named authorized_keys inside the .ssh directory. You can use any text editor to create and edit this file. I'll be using Vim.

Open the authorized_keys file, paste the contents of the .pub file (the public key generated on Windows) into it, and save the file.

That's it! Our Ubuntu machine now has the public key it needs to recognize and authenticate SSH connection attempts from our Windows machine.
<ImagieCenter src={pic2} alt={"ubuntu auth keys"}/>

<ImagieCenter src={pic3} alt={"ubuntu auth keys"}/>
Find the IP address of our Ubuntu machine. We need this IP address, along with the Ubuntu username, to establish an SSH connection from our Windows machine.

To do this, simply open the terminal on Ubuntu and run the following command:

bash
ifconfig


This will display the network interfaces and their associated IP addresses. Look for the inet address under the active network interface. Note down this IP address
<ImagieCenter src={pic4} alt={"ubuntu auth keys"}/>

Switch back to our Windows machine. Here, we'll create an SSH configuration file to save our Ubuntu machine's connection details, including its IP address, username, port, and the location of our private SSH key.

This configuration file makes connecting to our Ubuntu machine much easier because we won't have to manually enter all these details every time we want to establish an SSH connection.

Open your .ssh directory on Windows and create a file named config (without any file extension). You can use any text editor to create it. I'll be using Vim.

Inside the config file, add the following configuration:

ssh-config
Host u
    HostName 192.168.31.204
    User mbwntsm
    Port 22
    IdentityFile C:/Users/asus/.ssh/ubuntu_id_ed25519


Let's understand what each line means:

Host u: This is a nickname or alias for our Ubuntu machine. Instead of typing the complete connection details every time, we can simply use u to connect.
HostName 192.168.31.204: This specifies the actual IP address of our Ubuntu machine that we identified in the previous step.
User mbwntsm: This is the username of our Ubuntu account. SSH will use this username when attempting to connect.
Port 22: This specifies the port on which the SSH server is listening. By default, SSH uses port 22.
IdentityFile: This specifies the location of our private SSH key (ubuntu_id_ed25519) on Windows. SSH will use this key to authenticate with our Ubuntu machine.

Once you've added these details, save the file.

Now, whenever we want to connect to our Ubuntu machine, we don't need to remember its IP address, username, or private key location. SSH will automatically read these details from our config file.

All we need to do is open the Windows terminal and run:

bash
ssh u


And SSH will use the configuration we just created to establish the connection with our Ubuntu machine!
<ImagieCenter src={pic7} alt={"ubuntu auth keys"}/>
<ImagieCenter src={pic5} alt={"ubuntu auth keys"}/>
And that's it! We've successfully learned how to generate SSH keys and configure passwordless SSH authentication between our Windows and Ubuntu machines.

Now, we can connect to our Ubuntu machine securely using SSH without having to enter the account password every time.

All we need to do is run:

bash
ssh u


Pretty simple, right? We've made our SSH connection faster, easier, and more convenient!

<Paragraph>Now, here's something really interesting about the SSH config file! We can create as many SSH key pairs as we want and configure multiple machines with their respective usernames, IP addresses, and private key locations.

Let's try the same process again, but this time, we'll connect our Arch Linux machine to Windows using SSH</Paragraph>


<p className='text-red-500'>"I recommend setting a passphrase when generating an SSH key for your GitHub account, but I'm skipping it for now. You can always add one later.</p>
<ImagieCenter src={pic6} alt={"ubuntu auth keys"}/>

 <ImagieCenter src={pic9} alt={"ubuntu auth keys"}/>
<ImagieCenter src={pic10} alt={"ubuntu auth keys"}/>
<ImagieCenter src={pic11} alt={"ubuntu auth keys"}/>

We've mastered SSH and learned how to connect multiple machines using different SSH key pairs. It's time for the final boss: connecting our Windows machine to our GitHub account using SSH!

The process is almost the same as what we've done so far.

First, we'll generate a new SSH key pair specifically for our GitHub account. We'll give it a separate name so that it doesn't interfere with our existing Ubuntu and Arch Linux SSH keys.

Next, we'll copy the contents of the generated .pub file and add the public key to our GitHub account.

To do this, navigate to:

GitHub → Settings → SSH and GPG keys → New SSH key

Give your key a suitable title, paste the copied public key into the Key field, and save it.
<ImagieCenter src={pic13} alt={"ubuntu auth keys"}/>


<ImagieCenter src={pic14} alt={"ubuntu auth keys"}/>
Let's go back to our Windows machine and update the existing SSH config file by adding another host entry for GitHub:
<ImagieCenter src={pic15} alt={"ubuntu auth keys"}/>
Save the config file. Let's test our SSH connection by entering this command
<p className='text-lime-400'>ssh -T git@github-username</p>

<ImagieCenter src={pic16} alt={"ubuntu auth keys"}/>
We've successfully learned how to manage multiple SSH keys and use a single SSH config file to connect to different machines and services. Pretty awesome!

Let's see if everything is actually working or not!

We'll test our SSH configuration by cloning a GitHub repository using its SSH URL.

Head over to GitHub, open any repository you want to clone, click on the Code button, and select the SSH option. Copy the SSH URL.

It should look something like this:

bash
git@github.com:username/repository.git


Since we've already configured our SSH alias as github in the config file, we can replace github.com with our custom alias.

So, our SSH URL will look like this:

bash
git@github:username/repository.git


Now, open your terminal and run:

bash
git clone git@github:username/repository.git


If everything is configured correctly, Git will use our SSH config file to locate the correct private key and authenticate with GitHub.

And there we go! Our repository should start cloning without asking us for our GitHub password.

That's the real test! We've successfully set up SSH authentication and used it to clone a GitHub repository.
<ImagieCenter src={pic17} alt={"ubuntu auth keys"}/>
<p className='text-lime-400'>ssh -T git@github.com/usernmae/repository.git</p>
No doubt, the permission was denied because I forgot to use the SSH private key associated with this Git account.
<ImagieCenter src={pic18} alt={"ubuntu auth keys"}/>
<p className='text-lime-400'>ssh -T git@github-username:username/repository.git</p>
now this will work 
<ImagieCenter src={pic19} alt={"ubuntu auth keys"}/>

Awesome! Cloning worked successfully. Now let's take it one step further and test whether we can push code to our GitHub repository using SSH authentication.

For this, let's make a small change to our cloned repository. You can create a new file, for example, hello.txt, and add some content to it.

Once that's done, open the terminal inside your repository and follow these steps:

Step 1: Check the changes

bash
git status


This will show us the files we've added or modified.

Step 2: Stage the changes

bash
git add .


This adds our changes to the staging area.

Step 3: Commit the changes

bash
git commit -m "test"


This creates a commit with our changes.

Step 4: Push the code to GitHub

bash
git push origin main


This pushes our committed changes to the main branch of our GitHub repository.

And that's it! Head over to GitHub and refresh your repository page. You should see your newly added file there.

The best part? We just pushed code to GitHub using SSH authentication without entering our GitHub password or manually specifying our private key.

We've successfully tested both sides of the SSH workflow: cloning repositories and pushing code to GitHub!
<ImagieCenter src={pic21} alt={"ubuntu auth keys"}/>
<ImagieCenter src={pic20} alt={"ubuntu auth keys"}/>
<ImagieCenter src={pic22} alt={"ubuntu auth keys"}/>
<p className='text-pink-500'>“Oops! I forgot to use the private key again. Let's add the remote origin once more using the SSH key.”</p> 
<p className='text-lime-400'>git remote set-url origin git@github-username:/repository.git</p>


<ImagieCenter src={pic23} alt={"ubuntu auth keys"}/>

And one more useful thing! Sometimes, you might accidentally forget to configure the correct SSH URL when setting up your Git remote. Don't worry, you can always fix it without having to clone the repository again.

Simply use the following command:


bash
git remote set-url origin git@github-username:username/reponame.git
 </Paragraph>
    </>
  );
}

export default Ssh_auth;