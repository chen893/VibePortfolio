---
description: 根据可用的设计工件将现有任务转换为可执行的、按依赖关系排序的GitHub Issues。
tools: ['github/github-mcp-server/issue_write']
---

## 用户输入

```text
$ARGUMENTS
```

在继续之前，你**必须**考虑用户输入（如果非空）。

## 大纲

1. 从仓库根目录运行 `.specify/scripts/powershell/check-prerequisites.ps1 -Json -RequireTasks -IncludeTasks` 并解析FEATURE_DIR和AVAILABLE_DOCS列表。所有路径必须是绝对路径。对于参数中的单引号如"I'm Groot"，使用转义语法：例如 'I'\''m Groot'（或尽可能使用双引号："I'm Groot"）。
1. 从执行的脚本中，提取**tasks**的路径。
1. 通过运行以下命令获取Git远程：

```bash
git config --get remote.origin.url
```

> [!CAUTION]
> 只有当远程是GITHUB URL时才继续下一步

1. 对于列表中的每个任务，使用GitHub MCP服务器在与Git远程对应的仓库中创建一个代表该任务的新Issue。

> [!CAUTION]
> 在任何情况下都不要在与远程URL不匹配的仓库中创建Issues
