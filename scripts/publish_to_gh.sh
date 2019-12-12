# 1 remove old docs dir
rmdir docs

# 2 Build the prj
ng build --prod --output-path=dist

# 3 Make the dist folder a valid github page.
ngh

# 4 Rename the dist folder to docs for the use of github pages
mv dist docs
