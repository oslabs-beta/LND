// #include <map>
// #include <string>
// #include <vector>

// // #include "client/crashpad_client.h"
// // #include "client/settings.h"

// using namespace crashpad;

// {*This method directs crashes to the Crashpad handler. On macOS, this is applicable to this process and all subsequent child processes. On other platforms, child processes must also register by using SetHandlerIPCPipe(). For more information on configuring the crashpad handler, see crashpad_handler.
// *}

// bool startCrashpad() {
//   // Cache directory that will store crashpad information and minidumps
//   base::FilePath database("path/to/crashpad/db");
//   // Path to the out-of-process handler executable
//   base::FilePath handler("path/to/crashpad_handler");
//   // URL used to submit minidumps to
//   std::string url("https://o1107587.ingest.sentry.io/api/6134850/minidump/?sentry_key=6f41a9b89db74f9c89a9721f365b84fc");
//   // Optional annotations passed via --annotations to the handler
//   std::map<string, string> annotations;
//   // Optional arguments to pass to the handler
//   std::vector<string> arguments;

//   CrashpadClient client;
//   bool success = client.StartHandler(
//     handler,
//     database,
//     database,
//     url,
//     annotations,
//     arguments,
//     /* restartable */ true,
//     /* asynchronous_start */ false
//   );

//   return success;
// }