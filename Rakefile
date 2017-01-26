
ZIP_FILE = 'phantom-zip.zip'
FUNCTION = 'phCallJanovaTestHarness'
OUTPUT_FILE = 'outputfile.txt'

task :cleanup do
  `rm #{ZIP_FILE}`
  `rm #{OUTPUT_FILE}`
end

task :zip => :cleanup do
  f = FileList.new do |fl|
    fl.exclude('.git')
    fl.exclude(OUTPUT_FILE)
    fl.include("*.*")
    fl.include("phantomjs_linux-x86_64")
  end
  
  `zip -X #{ZIP_FILE} #{f.to_s}`
end

task :update => :zip do 
  `aws lambda update-function-code --function-name #{FUNCTION} --zip-file fileb://#{ZIP_FILE}`
end

task :invoke do
  `aws lambda invoke --function-name #{FUNCTION} #{OUTPUT_FILE}`
end
