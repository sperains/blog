# Git版本管理工具

## 多人项目中使用SVN遇到的问题

### 1. 代码覆盖, 使用SVN的时候我们经常强调的一件事就是提交代码之前一定要先更新.
  A提交了代码, B在提交的时候, SVN会要求先更新代码, 此时B修改的代码就很可能被更新下来的代码覆盖~   
### 2.  创建分支的过程太麻烦. SVN创建分支相当于重新创建了一个项目.

  真实场景:
  - 线上版本: 功能正常运行的版本
  - 开发版本: 正在开发中的版本, 而且新功能开发可能需要持续相当一段时间
  - bug修复: 线上版本有问题需要紧急维护

  SVN解决不了以上问题.
  而git如何解决以上问题?
  
  主分支作为线上版本进行发布.
  根据主分支创建新的开发版本分支, 在此分支上开发新的功能.
  当有bug需要修复的时候, 将正在开发的代码保存提交至开发版本分支.
  切换回主分支, 修改bug并提交至主分支
  
### 3.  版本提交必须要有网络.
  在项目开发中, 有时候完成了一个功能模块, 此时想要保存一下代码, 这个动作SVN必须在网络正常的情况下才行进行. git可以先提交在本地, 等网络畅通时推送到云端.


## Git使用

1. 创建版本库
```
mkdir learngit
cd learngit

# 初始化本地仓库
git init
```
2. 添加文件至版本库
```
touch readme.txt

git add readme.txt

git commit -m '添加一个readme文件'

```
3. 查看提交记录
```
git log --pretty
```
4. 版本回退(撤回提交)
```
# 回退到上次版本
git reset --hard HEAD~

# 回退到某个具体的版本
git reset --hard <版本号>
```
5. 查看每一次git提交操作(包括回退记录)
```
git reflog
```
  
6. 工作区和暂存区

  - 工作区相当于项目目录
  - 版本库 (.git文件夹)
   - 暂存区
   `git add ` 将文件添加到暂存区
   `git commit` 将暂存区文件提交至分支
  
 ![](https://www.liaoxuefeng.com/files/attachments/919020037470528/0)
  
  
7. 撤销修改
  一种是readme.txt自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；
  ```
   git restore readme.txt
  ```
  一种是readme.txt已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。
  ```
  git restore --staged readme.txt
  ```

8. 添加远程仓库
登录gitee(github) 创建一个新仓库
```
git remote add origin https://gitee.com/sperains_admin/git_learn.git
git push origin master
```


9.  从远程仓库克隆
```
git clone https://gitee.com/sperains_admin/git_learn.git
```

10. 分支操作
```
# 查看分支：
git branch -a

# 创建分支：
git branch <name>

# 切换分支：
git checkout <name> 
// 或者
git switch <name>

# 创建+切换分支：
git checkout -b <name>或者git switch -c <name>

# 合并某分支到当前分支：
git merge <name>

# 删除分支：
git branch -d <name>
```
11. 解决冲突

12. 删除分支
```
git branch -d dev
```
