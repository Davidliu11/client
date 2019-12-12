# 1 Build the prj
ng build

# 2 Make the dist folder a valid github page.
ngh dist

# 3 remove old docs dir
rmdir docs

# 4 Rename the dist folder to docs for the use of github pages
mv dist docs
