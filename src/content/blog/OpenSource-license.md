---
title: "Understanding Open Source Licensing on GitHub"
pubDate: 2025-12-31
author: "Saroj Adhikari"
# layout: ../../layouts/BlogLayout.astro
authImage: "/team/tenure-2026/saroj.jpeg"
coverImage: "/blogs_assets/open-source-heading.jpg"
slug: github-open-source-licensing
summary: "Choosing the right open source license is crucial for protecting your work and defining how others can use it. This guide will help you navigate the world of software licensing on GitHub, from permissive to protective licenses."
type: "Article"
---

# Understanding Open Source Licensing on GitHub 🔐

When you share code on GitHub, **licensing** determines how others can use, modify, and distribute your work. Without a license, your project is technically not open source, and others may be hesitant to contribute or use it.

## 1. Why Licensing Matters 📜

A clear license protects both creators and users by defining usage rights and restrictions.

### Without a License:
- ❌ Your code is NOT open source
- ❌ Others cannot legally use your code
- ❌ No one knows what they can/cannot do
- ❌ Limits collaboration and adoption

### With a License:
- ✅ Legal clarity for everyone
- ✅ Defines usage rights
- ✅ Encourages contributions
- ✅ Protects both creators and users

## 2. Types of Open Source Licenses 🏷️

### **Permissive Licenses** (Business-friendly)
Allow almost any use with minimal restrictions.

#### **MIT License**
The most popular and permissive license.

**✅ Allows:**
- Commercial use
- Modification  
- Distribution
- Private use
- Sublicensing

**⚠️ Requires:**
- Include original copyright notice

**💡 Best for:** Projects that want maximum adoption with minimal restrictions.

#### **Apache License 2.0**
Similar to MIT but includes patent protection.

**✅ Everything in MIT +**
- Explicit patent grant
- Protection against patent lawsuits
- Requires notice of modifications

**💡 Best for:** Projects involving patents or corporate contributions.

### **Copyleft Licenses** (Protective/Reciprocal)
Require derivatives to remain open source under the same terms.

#### **GNU GPLv3 (General Public License)**
Ensures derivatives remain open source.

**✅ Allows:**
- Commercial use
- Modification
- Distribution
- Private use

**❌ Requires:**
- Share source code
- Use same license for derivatives
- State changes

**💡 Best for:** Projects that want all derivatives to stay open source.

#### **GNU LGPLv3 (Lesser GPL)**
Less restrictive than GPL, allows linking with proprietary software.

**✅ More flexible than GPL:**
- Proprietary software can link dynamically
- Only modifications to library itself must be open source

**💡 Best for:** Libraries that want wider adoption while protecting core code.

## 3. How to Add a License to GitHub 🛠️

### Method 1: During Repository Creation
1. Create new repository
2. Click "Add a license"
3. Choose from dropdown menu
4. GitHub automatically creates `LICENSE` file

### Method 2: Add to Existing Repository
```bash
# Navigate to your project
cd your-project

# Create LICENSE file
touch LICENSE

# Or copy a license template
curl -o LICENSE https://opensource.org/licenses/MIT

# Add and commit
git add LICENSE
git commit -m "Add MIT License"
git push