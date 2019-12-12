# 1 Build the prj
ng build --prod

# 2 Make the dist folder a valid github page.
ngh dist client

# 3 remove old docs dir
rmdir docs

# 4 Rename the dist folder to docs for the use of github pages
mv dist docs
