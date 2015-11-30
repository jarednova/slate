grunt
middleman build
cp build/*.* ~/Sites/timber.gh-pages
cp -R build/fonts ~/Sites/timber.gh-pages
cp -R build/images ~/Sites/timber.gh-pages
cp -R build/includes ~/Sites/timber.gh-pages
cp -R build/javascripts ~/Sites/timber.gh-pages
cp -R build/stylesheets ~/Sites/timber.gh-pages