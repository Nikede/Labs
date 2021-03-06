import java.io.*;

public class create_project {

  public static void main(String[] args) throws Exception {
	  
	  File css_folder;
	  File js_folder;
	  File html;
	  File css;
	  File js;
	  File destination = new File(System.getProperty("user.dir"));

    if (args.length == 0) {
      css_folder = new File("css");
      js_folder = new File("js");

      html = new File(System.getProperty("user.dir"), "index.html");
      css = new File(css_folder.toString(), "style.css");
      js = new File(js_folder.toString(), "app.js");
    } else {
      css_folder = new File(args[0] + "\\css");
      destination = new File(args[0]);
      js_folder = new File(args[0] + "\\js");

      html = new File(args[0], "index.html");
      css = new File(css_folder.toString(), "style.css");
      js = new File(js_folder.toString(), "app.js");
    }
		
    String html_string = "<!DOCTYPE html>\r\n" + 
      "<html lang=\"en\">\r\n" + 
      "<head>\r\n" + 
      "  <meta charset=\"UTF-8\">\r\n" + 
      "  <title>Title</title>\r\n" + 
      "  <link rel=\"stylesheet\" href=\"css/style.css\"/>\r\n" + 
      "</head>\r\n" + 
      "<body>\r\n" + 
      "  <div class=\"content\">\r\n" + 
      "    <h1>Hello! I'm ready for edit! :)</h1>\r\n" + 
      "  </div>\r\n" + 
      "  <script src=\"js/app.js\"></script>\r\n" + 
      "</body>\r\n" + 
      "</html>";
	  
    String css_string = "/* this source generate automatically */\r\n" + 
      "\r\n" + 
      "html {\r\n" + 
      "\r\n" + 
      "}\r\n" + 
      "\r\n" + 
      "body {\r\n" + 
      "\r\n" + 
      "}\r\n" + 
      "\r\n" + 
      ".content {\r\n" + 
      "\r\n" + 
      "}\r\n" + 
      "\r\n" + 
      ".content h1 {\r\n" + 
      "\r\n" + 
      "}";
	  
    String js_string = "/* this source generate automatically */\r\n" + 
      "";
		
    boolean done = false;

    if(args.length > 0 && !destination.exists()) {
    	destination.mkdir();
    }

    if (!html.exists()) {
      System.out.println(html.toString());
      done = html.createNewFile();
      FileWriter html_fw = new FileWriter(html, false);
      html_fw.write(html_string);
      html_fw.flush();
      html_fw.close();
    } else System.out.println("HTML file already exists");
	
    if (!css_folder.exists()) {
      css_folder.mkdir();
    } 
    if (!css.exists()){
      done &= css.createNewFile();
      FileWriter css_fw = new FileWriter(css, false);
      css_fw.write(css_string);
      css_fw.flush();
      css_fw.close();
    } else System.out.println("CSS file already exists");
	
    if (!js_folder.exists()) {
      js_folder.mkdir();
    }
    if (!js.exists()){
      done &= js.createNewFile();
      FileWriter js_fw = new FileWriter(js, false);
      js_fw.write(js_string);
      js_fw.flush();
      js_fw.close();
    } else System.out.println("JS file already exists");

    if (done) System.out.println("All files successfully created");

  }

}