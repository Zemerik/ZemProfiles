<p align = "center">

<img src = "public/favicon.png" style = "height:250px;width:250px">

<br>

<br>

<img src = "https://skillicons.dev/icons?i=javascript,css,html,react,nodejs,vscode,vercel,github&perline=25">

</p>

<h1 align = "center">
  ZemProfiles
</h1>

<p align = "center">
  Discover & Connect with Developers
</p>

<p align = "center">
  <img src = "public/Screenshot.png">
</p>

## ➕ Adding your Profile:

1. Fork a copy of this Repository on your Github account by clicking below,

- [Fork](https://github.com/Zemerik/ZemProfiles/fork)

2. Head over to your **Forked** Repository, and locate the `public/data` directory. Create a new file, and name it `[Your Github Username].json`. 

> [!Note]
> Remember to replace `[Your Github Username]` with your actual Github Username. 

3. Add the following code snippet in the file,

> [!Warning]
> This is the content of your actual profile, so ensure that it has no typo's, faulty links, etc

```json
{
  "name": "NAME HERE",
  "location": "CITY, COUNTRY",
  "bio": "SHOULD BE AROUND 20 - 30 WORDS IN LENGTH",
  "avatar": "https://github.com/[YOUR GITHUB USERNAME].png",
  "portfolio": "LINK TO YOUR PORTFOLIO OR OTHER WEBSITE",
  "skills": ["SKILL 1", "SKILL 2", "SKILL 3", "..."],
  "social": {
    "GitHub": "YOUR GITHUB PROFILE LINK",
    "Twitter": "YOUR X (TWITTER) PROFILE LINK",
    "LinkedIn": "YOUR LINKEDIN PROFIFLE LINK"
  }
}
```

>[!Note]
> You are free to use any picture other than your github username, as long as it is `png`/`jpg`/`jpeg`. You may require to **upload** your picture in either the `public/data` directory or create a **New Folder** in that directory. 

> [!Caution]
> Your Bio must not be more than **30** Words. 

> [!Tip]
> If you do not have a Portfolio currently or one of the social accounts, you can give a link to other website. 

4. After **saving** the file, head over to the `ProfilesList.json` file in the `src` directory and edit the file with the code,

```json
["zemerik.json", "{Name of the File which you created earlier}"]
```

5. Save the file in which you have listed your profile, and open a pull-request on this repository. Your PR will be **merged**/**reviewed** as soon as possible!

## 🐞Bug/Issue/Feedback/Feature Request:

- If you would like to report a bug, a issue, implement any feedack, or request any feature, you are free to do so by opening a issue on this repository. Remember to give a detailed explanation of what you are trying to say, and how it will help the website. 

## 💁 Support:

For any kind of support or inforrmation, you are free to join our **Discord Server**,

<a href = "https://discord.gg/UF9KsmuGbr">
  <img src = "https://invidget.switchblade.xyz/UF9KsmuGbr">
</a>

<h1 align = "center">
  Thanks for Visiting🙏
</h1>

<p align = "center">
  Don't forget to leave a ⭐ 
  <br>
  Made with 💖 by <a href = "https://github.com/Zemerik">Hemang Yadav (Zemerik)</a>
</p>
