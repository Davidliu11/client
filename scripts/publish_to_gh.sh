# 1 Build the prj
ng build --prod --output-path=dist

# 2 Make the dist folder a valid github page.
ngh client

# 3 remove old docs dir
rmdir docs

# 4 Rename the dist folder to docs for the use of github pages
mv dist docs
