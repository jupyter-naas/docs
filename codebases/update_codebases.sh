#!/bin/bash

# Naas Documentation - Codebase Update Script
# This script pulls the latest changes from all Naas repositories
# to ensure documentation stays synchronized with current codebase

set -e  # Exit on any error

echo "🔄 Updating Naas codebases for documentation sync..."
echo "=================================================="

# Define repositories as space-separated lists
REPO_NAMES="abi workspace naas-python chrome-extension naas-models naas-api-ce credits-api"
REPO_URLS="https://github.com/jupyter-naas/abi.git https://github.com/jupyter-naas/workspace.git https://github.com/jupyter-naas/naas-python.git https://github.com/jupyter-naas/chrome-extension.git https://github.com/jupyter-naas/naas-models.git https://github.com/jupyter-naas/naas-api-ce.git https://github.com/jupyter-naas/credits-api.git"

ERRORS=""

# We're already in the codebases directory
echo "📁 Working in $(pwd)"

# Function to update a single repository
update_repo() {
    local repo_name=$1
    local repo_url=$2
    
    echo "📦 Processing $repo_name..."
    
    if [ -d "$repo_name" ]; then
        echo "  ↻ Pulling latest changes from main branch..."
        cd "$repo_name"
        
        # Check if we're on main branch, switch if not
        current_branch=$(git branch --show-current 2>/dev/null || git rev-parse --abbrev-ref HEAD)
        if [ "$current_branch" != "main" ] && [ "$current_branch" != "master" ]; then
            echo "  🔀 Switching from $current_branch to main branch..."
            git checkout main 2>/dev/null || git checkout master 2>/dev/null || {
                echo "  ⚠️  Warning: Could not switch to main/master branch"
                ERRORS="$ERRORS\n$repo_name: Could not switch to main/master branch"
                cd ..
                return
            }
        fi
        
        # Pull latest changes
        if git pull origin main 2>/dev/null || git pull origin master 2>/dev/null; then
            echo "  ✅ Successfully updated $repo_name"
        else
            echo "  ❌ Failed to pull latest changes for $repo_name"
            ERRORS="$ERRORS\n$repo_name: Failed to pull latest changes"
        fi
        
        cd ..
    else
        echo "  📥 Cloning repository..."
        if git clone "$repo_url" "$repo_name"; then
            echo "  ✅ Successfully cloned $repo_name"
        else
            echo "  ❌ Failed to clone $repo_name"
            ERRORS="$ERRORS\n$repo_name: Failed to clone repository"
        fi
    fi
    echo ""
}

# Convert space-separated strings to arrays
set -- $REPO_NAMES
repo_names_array=("$@")
set -- $REPO_URLS  
repo_urls_array=("$@")

# Update all repositories
for i in $(seq 0 $((${#repo_names_array[@]} - 1))); do
    update_repo "${repo_names_array[$i]}" "${repo_urls_array[$i]}"
done

# Summary
echo "=================================================="
if [ -z "$ERRORS" ]; then
    echo "🎉 All repositories updated successfully!"
    echo ""
    echo "📊 Repository Status:"
    for repo_name in ${repo_names_array[@]}; do
        if [ -d "$repo_name" ]; then
            cd "$repo_name"
            commit_hash=$(git rev-parse --short HEAD 2>/dev/null || echo "unknown")
            commit_date=$(git log -1 --format="%ci" 2>/dev/null | cut -d' ' -f1 || echo "unknown")
            echo "  ✅ $repo_name: $commit_hash ($commit_date)"
            cd ..
        fi
    done
else
    echo "⚠️  Some repositories had issues:"
    echo -e "$ERRORS"
    exit 1
fi

echo ""
echo "🚀 Codebases are now synchronized!"
echo "   Documentation can be updated with latest codebase changes."
