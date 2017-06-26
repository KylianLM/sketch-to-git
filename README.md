
## (WIP) Sketch To Git 
--------
need Sketch 43+

### Install
----
Download Zip File, and double click on SketchToGit.sketchplugin.
That's it

### Git
----

This plugin don't manage your git folder. You need to do this with CLI or GUI.

To use git with CLI
```
$ git init
$ git checkout -b newBranch
```
Make your change on sketch.
Click on Unzip option or press Cmd + Shift + U.

Don't forget to generate .gitignore with "*.sketch"

Then
```
$ git add --all
$ git commit -m "[CHG] DESCRIBE YOUR CHANGE HERE"
```

You can do this with Git GUI like Git Kraken or Github Desktop.

------
Inspired by
https://github.com/mathieudutour/git-sketch-plugin
