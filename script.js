/*
    Git Commands
    git -> check if git is installed or not
    git --version -> check git version

    git config --global user.email "email"
    git config --global user.name "name"

    git init -> initialize git in project
    git status -> status of git especially in working directory, staging and commit

    git commit (snapshot)
     -> working directory, working tree, workspace, modified mode
     -> staging area, staging mode
     -> repository, commit mode

    git add -> add project's file(s) to staging area
    git add -> add all project's files to staging area
    git add index.html -> add index.html to staging area

    git rm --cached <filename> -> get back to modified from staging

    git commit -m "message"
    -m => message
    message => what is done in this moment
    eg. git commit -m "Commit files to repository first time"

    git commit -am "message" -> "Add stage and commit at one time using -am"
    * This will only work when file is already in staged mode.

    git log -> records of commits
    git log --oneline -> records of commits in simple one line view

    git checkout -> call back to former commit, and just watching, do nothing
    eg. git checkout id
    id = commit's is eg. 0579c10dcaa0519e88a1cc556aec262e4bfa22c0

    git checkout <master> or <main> -> call back to latest commit

    git restore --staged <file> -> used to restore from staging to working tree.

    git revert <id> -> delete changes in <id> and then create new commit at the last place like that Revert "<id>'s message".
                        So, you can call back to deleted <id> commit.

    git reset --hard <id> -> used to call back to commit <id> and delete changes in modified, staging of commits after commit <id>.
    
    git reset --mixed <id> -> used to call back to commit <id> and not delete changes in modified, 
                            but delete staging of commits after commit <id>.
    git reset <id> == git reset --mixed <id>

    git reset --soft <id> -> used to call back to commit <id> and not delete changes in modified and staging of commits after commit <id>.
*/


// git branch

/* 
    git config --global init.defaultBranch main -> change git initial branch's name master to main 
                                                    because in github, main is the name of initial branch
                                            
    git branch -> check number of branches of project
    git branch -a == git branch

    git branch <name> -> create new branch
    eg. git branch feature/tabs

    HEAD --> current branch name
    branch name --> latest commit ID

    git switch <branch name> -> change branch
    git checkout <branch name> == git switch <branch name>

    git switch -c <branch name> -> create new branch and change to it
    git checkout -b <branch name> == git switch -c <branch name>

    To delete branch, first switch to main/master branch. And then
    git branch -D <branch name>
*/


// Connect with Github Repo

/* 
    1. Project folder name and github repo name should be the same
    
    2. Check/Set Email and username
        git config --global user.email "email" -> email must be github acc's email
        git config --global user.name "name" -> name must be github acc's username
    
    3.  In project folder, call terminal,
        a. git init
        b. git remote add origin https://github.com/MinnKhantKyi/git_github_notes.git
            Set origin variable value by github's repo address
        
        * git remote -v -> check all variables
*/