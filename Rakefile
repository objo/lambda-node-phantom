
ZIP_FILE = 'phantom-zip.zip'
FUNCTION = 'firstPhantomFunction'
OUTPUT_FILE = 'outputfile.txt'

desc "Clean up zip file and output of the function run" 
task :cleanup do
  `rm #{ZIP_FILE}`
  `rm #{OUTPUT_FILE}`
end

desc "Zip up the files necessary for deployment" 
task :zip => :cleanup do
  f = FileList.new do |fl|
    fl.exclude('.git')
    fl.exclude(OUTPUT_FILE)
    fl.include("*.*")
    fl.include("phantomjs_linux-x86_64")
  end
  
  `zip -X #{ZIP_FILE} #{f.to_s}`
end

desc "Deploy the zip file to update #{FUNCTION}" 
task :update => :zip do 
  `aws lambda update-function-code --function-name #{FUNCTION} --zip-file fileb://#{ZIP_FILE}`
end

desc "Invoke lambda function #{FUNCTION}"
task :invoke do
  `aws lambda invoke --function-name #{FUNCTION} #{OUTPUT_FILE}`
end
