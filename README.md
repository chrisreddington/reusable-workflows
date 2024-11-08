# Sample Workflows Repository

This repository houses a collection of reusable GitHub Actions workflows that are utilized across our sample projects. These workflows are designed to provide consistent automation and CI/CD processes across multiple repositories.

## Overview

The workflows in this repository serve as centralized, maintainable templates that can be referenced by other repositories, ensuring consistency and reducing duplication of effort.

## Development

This repository includes a devcontainer configuration to streamline the workflow development process. Using the devcontainer provides a consistent development environment with all necessary tools pre-installed.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your workflow changes thoroughly
5. Submit a Pull Request

### Testing Workflows

Before submitting a PR:
- Test any workflow changes in a sample repository
- Document the testing process and results
- Ensure changes don't break existing workflow implementations

## Workflow Parameters

The baseline validator workflow accepts the following parameters:
- `required-extensions`: Comma-separated list of required VS Code extensions
- `devcontainer-path`: Path to devcontainer.json file
- `required-files`: List of required files that must exist in the repository
- `required-features`: List of required features that must be used in the devcontainer.json file

## License

This repository is licensed under the [MIT License](LICENSE).