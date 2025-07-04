
# Commit Message Convention

This document describes the commit message format to keep a clean and consistent history.

---

## Format

```
<type>(<scope>): <subject>
```

- **type**: The type of change
- **scope**: The area of the code affected (optional but recommended)
- **subject**: A short description of the change (imperative mood, no period)

---

## Types

| Type   | Description                       | Example                      |
|--------|---------------------------------|------------------------------|
| feat   | A new feature                   | feat(about): add i18n support |
| fix    | A bug fix                      | fix(header): fix mobile layout issue |
| docs   | Documentation only             | docs(readme): update usage instructions |
| chore  | Routine tasks (build, CI, deps) | chore(docker): update base image version |
| test   | Adding or fixing tests         | test(backend): add unit tests for user service |
| refactor | Code changes that neither fix a bug nor add a feature | refactor(frontend): simplify header component |

---

## Rules

- Use **imperative mood** in the subject (e.g., “fix”, not “fixed” or “fixes”)
- Keep the subject **short and clear** (50 characters or less preferred)
- No period (`.`) at the end of the subject
- Use lowercase for type and scope
- Separate type and scope with parentheses and a colon as shown
- If no scope, omit parentheses: `feat: add login`

---

## Examples

```
feat(about): add multilingual support  
fix(navbar): correct dropdown behaviour  
docs: update README with setup instructions  
chore: update dependencies  
test(api): add integration tests for endpoints  
refactor(auth): clean up login logic
```

---
